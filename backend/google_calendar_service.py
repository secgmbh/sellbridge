import os
import logging
from datetime import datetime, timedelta, timezone
from typing import List, Dict, Optional
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import requests
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

class GoogleCalendarService:
    """Service für Google Calendar Integration."""
    
    def __init__(self):
        self.client_id = os.getenv("GOOGLE_CLIENT_ID")
        self.client_secret = os.getenv("GOOGLE_CLIENT_SECRET")
        self.redirect_uri = os.getenv("GOOGLE_REDIRECT_URI")
        self.calendar_name = os.getenv("GOOGLE_CALENDAR_NAME", "sellbridge")
        self.scopes = ['https://www.googleapis.com/auth/calendar']
        
    def get_authorization_url(self) -> Dict[str, str]:
        """Erstellt OAuth-URL für Admin-Authentifizierung."""
        try:
            flow = Flow.from_client_config(
                {
                    "web": {
                        "client_id": self.client_id,
                        "client_secret": self.client_secret,
                        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                        "token_uri": "https://oauth2.googleapis.com/token",
                        "redirect_uris": [self.redirect_uri]
                    }
                },
                scopes=self.scopes,
                redirect_uri=self.redirect_uri
            )
            
            auth_url, state = flow.authorization_url(
                access_type='offline',
                prompt='consent',
                include_granted_scopes='true'
            )
            
            return {"authorization_url": auth_url, "state": state}
            
        except Exception as e:
            logger.error(f"Fehler beim Erstellen der Authorization URL: {str(e)}")
            raise
    
    def exchange_code_for_tokens(self, code: str) -> Dict:
        """Tauscht Authorization Code gegen Tokens."""
        try:
            # Direct token exchange
            token_response = requests.post(
                'https://oauth2.googleapis.com/token',
                data={
                    'code': code,
                    'client_id': self.client_id,
                    'client_secret': self.client_secret,
                    'redirect_uri': self.redirect_uri,
                    'grant_type': 'authorization_code'
                }
            )
            
            if token_response.status_code != 200:
                logger.error(f"Token exchange failed: {token_response.text}")
                raise Exception("Token exchange failed")
            
            tokens = token_response.json()
            
            # Get user info
            user_info = requests.get(
                'https://www.googleapis.com/oauth2/v2/userinfo',
                headers={'Authorization': f'Bearer {tokens["access_token"]}'}
            ).json()
            
            return {
                "tokens": tokens,
                "user_email": user_info.get('email')
            }
            
        except Exception as e:
            logger.error(f"Fehler beim Token-Austausch: {str(e)}")
            raise
    
    def get_credentials(self, tokens: Dict) -> Credentials:
        """Erstellt Credentials-Objekt und refresht bei Bedarf."""
        creds = Credentials(
            token=tokens['access_token'],
            refresh_token=tokens.get('refresh_token'),
            token_uri='https://oauth2.googleapis.com/token',
            client_id=self.client_id,
            client_secret=self.client_secret,
            scopes=self.scopes
        )
        
        # Auto-refresh if expired
        if creds.expired and creds.refresh_token:
            from google.auth.transport.requests import Request
            creds.refresh(Request())
            
        return creds
    
    def find_calendar_id(self, creds: Credentials) -> Optional[str]:
        """Findet die Calendar ID für den 'sellbridge' Kalender."""
        try:
            service = build('calendar', 'v3', credentials=creds)
            calendar_list = service.calendarList().list().execute()
            
            for calendar in calendar_list.get('items', []):
                if calendar.get('summary', '').lower() == self.calendar_name.lower():
                    logger.info(f"Kalender '{self.calendar_name}' gefunden: {calendar['id']}")
                    return calendar['id']
            
            # Falls nicht gefunden, primary verwenden
            logger.warning(f"Kalender '{self.calendar_name}' nicht gefunden, verwende 'primary'")
            return 'primary'
            
        except HttpError as e:
            logger.error(f"Fehler beim Suchen des Kalenders: {str(e)}")
            return 'primary'
    
    def get_available_slots(
        self,
        creds: Credentials,
        start_date: datetime,
        end_date: datetime,
        slot_duration_minutes: int = 60
    ) -> List[Dict]:
        """
        Gibt verfügbare Zeitslots zurück.
        
        Args:
            creds: Google Credentials
            start_date: Start-Datum für die Suche
            end_date: End-Datum für die Suche
            slot_duration_minutes: Dauer eines Slots in Minuten
        
        Returns:
            Liste von verfügbaren Zeitslots
        """
        try:
            service = build('calendar', 'v3', credentials=creds)
            calendar_id = self.find_calendar_id(creds)
            
            # Hole alle Events im Zeitraum
            events_result = service.events().list(
                calendarId=calendar_id,
                timeMin=start_date.isoformat(),
                timeMax=end_date.isoformat(),
                singleEvents=True,
                orderBy='startTime'
            ).execute()
            
            events = events_result.get('items', [])
            
            # Erstelle Liste aller möglichen Slots (9-17 Uhr, Mo-Fr)
            available_slots = []
            current_date = start_date
            
            while current_date < end_date:
                # Nur Wochentage (0=Montag, 4=Freitag)
                if current_date.weekday() < 5:
                    # Arbeitszeit: 9:00 bis 17:00 Uhr
                    work_start = current_date.replace(hour=9, minute=0, second=0, microsecond=0)
                    work_end = current_date.replace(hour=17, minute=0, second=0, microsecond=0)
                    
                    slot_start = work_start
                    while slot_start + timedelta(minutes=slot_duration_minutes) <= work_end:
                        slot_end = slot_start + timedelta(minutes=slot_duration_minutes)
                        
                        # Prüfe, ob Slot verfügbar ist
                        is_available = True
                        for event in events:
                            event_start = datetime.fromisoformat(event['start'].get('dateTime', event['start'].get('date')))
                            event_end = datetime.fromisoformat(event['end'].get('dateTime', event['end'].get('date')))
                            
                            # Wenn sich Slot und Event überschneiden
                            if not (slot_end <= event_start or slot_start >= event_end):
                                is_available = False
                                break
                        
                        if is_available:
                            available_slots.append({
                                "start": slot_start.isoformat(),
                                "end": slot_end.isoformat(),
                                "display": slot_start.strftime("%d.%m.%Y %H:%M")
                            })
                        
                        slot_start = slot_end
                
                current_date += timedelta(days=1)
            
            logger.info(f"Gefunden: {len(available_slots)} verfügbare Slots")
            return available_slots
            
        except HttpError as e:
            logger.error(f"Fehler beim Abrufen verfügbarer Slots: {str(e)}")
            raise
    
    def create_appointment(
        self,
        creds: Credentials,
        start_time: datetime,
        end_time: datetime,
        customer_name: str,
        customer_email: str,
        customer_phone: str = None,
        description: str = None
    ) -> Dict:
        """Erstellt einen Termin im Kalender."""
        try:
            service = build('calendar', 'v3', credentials=creds)
            calendar_id = self.find_calendar_id(creds)
            
            event_body = {
                'summary': f'Beratungstermin: {customer_name}',
                'description': f"""
Kunde: {customer_name}
E-Mail: {customer_email}
Telefon: {customer_phone or 'Nicht angegeben'}

{description or 'Keine weiteren Informationen'}
                """.strip(),
                'start': {
                    'dateTime': start_time.isoformat(),
                    'timeZone': 'Europe/Berlin',
                },
                'end': {
                    'dateTime': end_time.isoformat(),
                    'timeZone': 'Europe/Berlin',
                },
                'attendees': [
                    {'email': customer_email}
                ],
                'reminders': {
                    'useDefault': False,
                    'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},  # 1 Tag vorher
                        {'method': 'popup', 'minutes': 60},  # 1 Stunde vorher
                    ],
                },
            }
            
            event = service.events().insert(
                calendarId=calendar_id,
                body=event_body,
                sendUpdates='all'  # Sendet E-Mail-Benachrichtigungen
            ).execute()
            
            logger.info(f"Termin erstellt: {event.get('id')} für {customer_name}")
            
            return {
                "event_id": event.get('id'),
                "html_link": event.get('htmlLink'),
                "start": start_time.isoformat(),
                "end": end_time.isoformat()
            }
            
        except HttpError as e:
            logger.error(f"Fehler beim Erstellen des Termins: {str(e)}")
            raise

# Singleton-Instanz
google_calendar_service = GoogleCalendarService()
