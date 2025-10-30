import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging
import os
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

class EmailService:
    """Service für E-Mail-Versand via SMTP."""
    
    def __init__(self):
        self.smtp_server = os.getenv("SMTP_SERVER")
        self.smtp_port = int(os.getenv("SMTP_PORT", 587))
        self.sender_email = os.getenv("SMTP_SENDER")
        self.sender_password = os.getenv("SMTP_PASSWORD")
        self.sender_name = os.getenv("SMTP_FROM_NAME", "sellBridge")
    
    def send_confirmation_email(
        self, 
        customer_email: str, 
        customer_name: str,
        inquiry_subject: str
    ) -> bool:
        """Sendet Bestätigungs-E-Mail an den Kunden."""
        try:
            subject = f"Bestätigung: Ihre Anfrage zu {inquiry_subject}"
            
            html_body = f"""
            <html>
                <body style="font-family: Arial, sans-serif; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #000; border-bottom: 3px solid #FFDA00; padding-bottom: 10px;">
                            Vielen Dank, {customer_name}!
                        </h2>
                        <p>Wir haben Ihre Anfrage zu <strong>{inquiry_subject}</strong> erhalten.</p>
                        <p>Unser Team wird Ihre Nachricht prüfen und sich so schnell wie möglich bei Ihnen melden.</p>
                        <p>In der Zwischenzeit können Sie uns jederzeit weitere Informationen per E-Mail zukommen lassen.</p>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        <p>Mit freundlichen Grüßen,<br>
                        <strong>{self.sender_name} Team</strong><br>
                        <a href="mailto:{self.sender_email}" style="color: #FFDA00; text-decoration: none;">
                            {self.sender_email}
                        </a></p>
                    </div>
                </body>
            </html>
            """
            
            return self._send_email(
                recipient_email=customer_email,
                subject=subject,
                html_body=html_body
            )
            
        except Exception as e:
            logger.error(f"Fehler beim Senden der Bestätigungs-E-Mail an {customer_email}: {str(e)}")
            return False
    
    def send_inquiry_copy(
        self,
        customer_email: str,
        customer_name: str,
        customer_phone: str,
        company_name: str,
        inquiry_subject: str,
        inquiry_message: str
    ) -> bool:
        """Sendet Kopie der Anfrage an die Admin-E-Mail."""
        try:
            subject = f"Neue Kundenanfrage: {inquiry_subject} von {customer_name}"
            
            phone_info = f"<p><strong>Telefon:</strong> {customer_phone}</p>" if customer_phone else ""
            company_info = f"<p><strong>Unternehmen:</strong> {company_name}</p>" if company_name else ""
            
            html_body = f"""
            <html>
                <body style="font-family: Arial, sans-serif; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #000; border-bottom: 3px solid #FFDA00; padding-bottom: 10px;">
                            Neue Kundenanfrage erhalten
                        </h2>
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                            <p><strong>Von:</strong> {customer_name}</p>
                            <p><strong>E-Mail:</strong> <a href="mailto:{customer_email}" style="color: #0066cc;">
                                {customer_email}
                            </a></p>
                            {phone_info}
                            {company_info}
                            <p><strong>Betreff:</strong> {inquiry_subject}</p>
                        </div>
                        <hr style="border: none; border-top: 1px solid #ddd;">
                        <h3 style="color: #000;">Nachricht:</h3>
                        <div style="background-color: #fff; padding: 15px; border-left: 4px solid #FFDA00;">
                            <p style="white-space: pre-wrap;">{inquiry_message}</p>
                        </div>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        <p style="color: #666; font-size: 12px;">
                            Diese E-Mail wurde automatisch vom sellBridge Kontaktformular generiert.
                            Sie können direkt auf diese E-Mail antworten, um dem Kunden zu antworten.
                        </p>
                    </div>
                </body>
            </html>
            """
            
            # Set Reply-To header to customer email for easy response
            return self._send_email(
                recipient_email=self.sender_email,
                subject=subject,
                html_body=html_body,
                reply_to=customer_email
            )
            
        except Exception as e:
            logger.error(f"Fehler beim Senden der Anfrage-Kopie an Admin: {str(e)}")
            return False
    
    def _send_email(
        self,
        recipient_email: str,
        subject: str,
        html_body: str,
        reply_to: str = None
    ) -> bool:
        """Interne Methode zum Senden von E-Mails via SMTP."""
        try:
            # Create message
            message = MIMEMultipart("alternative")
            message["Subject"] = subject
            message["From"] = f"{self.sender_name} <{self.sender_email}>"
            message["To"] = recipient_email
            
            # Add Reply-To header if provided
            if reply_to:
                message["Reply-To"] = reply_to
            
            # Attach HTML part
            html_part = MIMEText(html_body, "html", "utf-8")
            message.attach(html_part)
            
            # Connect and send
            with smtplib.SMTP(self.smtp_server, self.smtp_port, timeout=10) as server:
                server.starttls()
                server.login(self.sender_email, self.sender_password)
                server.sendmail(
                    self.sender_email,
                    recipient_email,
                    message.as_string()
                )
            
            logger.info(f"E-Mail erfolgreich gesendet an {recipient_email}")
            return True
            
        except smtplib.SMTPAuthenticationError as e:
            logger.error(f"SMTP-Authentifizierungsfehler: {str(e)}")
            return False
        except smtplib.SMTPException as e:
            logger.error(f"SMTP-Fehler: {str(e)}")
            return False
        except Exception as e:
            logger.error(f"Unerwarteter Fehler beim E-Mail-Versand: {str(e)}")
            return False

# Singleton-Instanz erstellen
email_service = EmailService()
