from fastapi import FastAPI, APIRouter, HTTPException, status, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from email_service import email_service


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=50)
    company: Optional[str] = Field(None, max_length=255)
    interest: str = Field(..., min_length=1)
    message: str = Field(..., min_length=1, max_length=5000)
    
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Max Mustermann",
                "email": "[email protected]",
                "phone": "+49 123 456 7890",
                "company": "Musterfirma GmbH",
                "interest": "full-service",
                "message": "Ich interessiere mich für Ihre Dienstleistungen..."
            }
        }
    )

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", status_code=status.HTTP_200_OK)
async def submit_contact_form(
    form_data: ContactFormRequest,
    background_tasks: BackgroundTasks
):
    """
    Verarbeitet Kontaktformular-Anfragen und sendet E-Mails.
    
    Sendet Bestätigungs-E-Mail an den Kunden und Kopie an info@sellbridge.de.
    """
    try:
        logger.info(f"Verarbeite Kontaktanfrage von {form_data.email}")
        
        # Sende E-Mails im Hintergrund (non-blocking)
        background_tasks.add_task(
            send_contact_emails,
            form_data.email,
            form_data.name,
            form_data.phone or "",
            form_data.company or "",
            form_data.interest,
            form_data.message
        )
        
        # Speichere Anfrage in MongoDB (optional)
        contact_doc = {
            "id": str(uuid.uuid4()),
            "name": form_data.name,
            "email": form_data.email,
            "phone": form_data.phone,
            "company": form_data.company,
            "interest": form_data.interest,
            "message": form_data.message,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.contact_requests.insert_one(contact_doc)
        
        logger.info(f"Kontaktanfrage von {form_data.email} erfolgreich gespeichert")
        
        return {
            "success": True,
            "message": "Ihre Anfrage wurde erfolgreich gesendet. Sie erhalten in Kürze eine Bestätigung per E-Mail."
        }
        
    except Exception as e:
        logger.error(f"Fehler bei Kontaktformular-Verarbeitung: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Bei der Verarbeitung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
        )

def send_contact_emails(
    customer_email: str,
    customer_name: str,
    customer_phone: str,
    company_name: str,
    inquiry_subject: str,
    inquiry_message: str
):
    """Sendet Bestätigungs- und Admin-Benachrichtigungs-E-Mails."""
    try:
        # Sende Bestätigung an Kunden
        confirmation_sent = email_service.send_confirmation_email(
            customer_email=customer_email,
            customer_name=customer_name,
            inquiry_subject=inquiry_subject
        )
        
        if not confirmation_sent:
            logger.warning(f"Konnte Bestätigung nicht an {customer_email} senden")
        
        # Sende Kopie an Admin
        admin_notified = email_service.send_inquiry_copy(
            customer_email=customer_email,
            customer_name=customer_name,
            customer_phone=customer_phone,
            company_name=company_name,
            inquiry_subject=inquiry_subject,
            inquiry_message=inquiry_message
        )
        
        if not admin_notified:
            logger.warning("Konnte Admin-Benachrichtigung nicht senden")
            
        logger.info(f"E-Mails für {customer_email} erfolgreich versendet")
        
    except Exception as e:
        logger.error(f"Fehler beim E-Mail-Versand: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()