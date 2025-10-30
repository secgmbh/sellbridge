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
from datetime import datetime, timezone, timedelta
from email_service import email_service
from google_calendar_service import google_calendar_service


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

# Google Calendar Models
class AppointmentRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=50)
    start_time: str  # ISO format datetime string
    message: Optional[str] = Field(None, max_length=1000)

# Google Calendar Endpoints
@api_router.get("/calendar/auth/url")
async def get_calendar_auth_url():
    """Gibt OAuth-URL für Admin-Authentifizierung zurück."""
    try:
        auth_data = google_calendar_service.get_authorization_url()
        return auth_data
    except Exception as e:
        logger.error(f"Fehler beim Erstellen der Auth-URL: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Fehler beim Erstellen der Authentifizierungs-URL"
        )

@api_router.get("/calendar/auth/callback")
async def calendar_auth_callback(code: str):
    """Callback für OAuth-Authentifizierung."""
    try:
        # Exchange code for tokens
        auth_result = google_calendar_service.exchange_code_for_tokens(code)
        
        # Save tokens in database
        await db.google_tokens.update_one(
            {"type": "admin"},
            {
                "$set": {
                    "tokens": auth_result["tokens"],
                    "user_email": auth_result["user_email"],
                    "updated_at": datetime.now(timezone.utc).isoformat()
                }
            },
            upsert=True
        )
        
        logger.info(f"Google Calendar erfolgreich authentifiziert für {auth_result['user_email']}")
        
        return {
            "success": True,
            "message": "Google Calendar erfolgreich verbunden",
            "user_email": auth_result["user_email"]
        }
        
    except Exception as e:
        logger.error(f"Fehler beim Callback: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Fehler bei der Authentifizierung"
        )

@api_router.get("/calendar/available-slots")
async def get_available_slots(days: int = 14):
    """Gibt verfügbare Zeitslots zurück."""
    try:
        # Get tokens from database
        token_doc = await db.google_tokens.find_one({"type": "admin"})
        
        if not token_doc:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Google Calendar nicht verbunden. Bitte authentifizieren Sie sich zuerst."
            )
        
        # Get credentials
        creds = google_calendar_service.get_credentials(token_doc["tokens"])
        
        # Update tokens if refreshed
        if creds.token != token_doc["tokens"]["access_token"]:
            await db.google_tokens.update_one(
                {"type": "admin"},
                {"$set": {"tokens.access_token": creds.token}}
            )
        
        # Get available slots
        start_date = datetime.now(timezone.utc)
        end_date = start_date + timedelta(days=days)
        
        slots = google_calendar_service.get_available_slots(
            creds=creds,
            start_date=start_date,
            end_date=end_date,
            slot_duration_minutes=30  # 30 Minuten pro Slot
        )
        
        return {"slots": slots}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Fehler beim Abrufen der Slots: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Fehler beim Abrufen verfügbarer Termine"
        )

@api_router.post("/calendar/book-appointment")
async def book_appointment(appointment: AppointmentRequest):
    """Bucht einen Termin im Google Calendar."""
    try:
        # Get tokens from database
        token_doc = await db.google_tokens.find_one({"type": "admin"})
        
        if not token_doc:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Google Calendar nicht verbunden"
            )
        
        # Get credentials
        creds = google_calendar_service.get_credentials(token_doc["tokens"])
        
        # Parse datetime
        start_time = datetime.fromisoformat(appointment.start_time.replace('Z', '+00:00'))
        end_time = start_time + timedelta(minutes=30)  # 30 Minuten Gespräch
        
        # Create appointment
        event_result = google_calendar_service.create_appointment(
            creds=creds,
            start_time=start_time,
            end_time=end_time,
            customer_name=appointment.name,
            customer_email=appointment.email,
            customer_phone=appointment.phone,
            description=appointment.message
        )
        
        # Save appointment in database
        appointment_doc = {
            "id": str(uuid.uuid4()),
            "event_id": event_result["event_id"],
            "name": appointment.name,
            "email": appointment.email,
            "phone": appointment.phone,
            "start_time": start_time.isoformat(),
            "end_time": end_time.isoformat(),
            "message": appointment.message,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        await db.appointments.insert_one(appointment_doc)
        
        logger.info(f"Termin gebucht für {appointment.name} am {start_time}")
        
        return {
            "success": True,
            "message": "Termin erfolgreich gebucht",
            "event_id": event_result["event_id"],
            "calendar_link": event_result["html_link"]
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Fehler beim Buchen des Termins: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Fehler beim Buchen des Termins. Bitte versuchen Sie es später erneut."
        )

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