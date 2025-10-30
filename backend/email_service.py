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
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                    <!-- Header mit sellBridge Branding -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #FFDA00 0%, #FFC700 100%); padding: 40px 30px; text-align: center;">
                                            <h1 style="margin: 0; color: #000000; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">
                                                sellBridge
                                            </h1>
                                            <p style="margin: 10px 0 0 0; color: #333333; font-size: 14px;">
                                                Ihr Partner für E-Commerce-Erfolg
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 30px;">
                                            <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 24px; border-bottom: 3px solid #FFDA00; padding-bottom: 10px;">
                                                Vielen Dank für Ihre Anfrage!
                                            </h2>
                                            
                                            <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                Hallo {customer_name},
                                            </p>
                                            
                                            <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                wir haben Ihre Anfrage zu <strong style="color: #000000;">{inquiry_subject}</strong> erhalten und bedanken uns für Ihr Interesse an sellBridge.
                                            </p>
                                            
                                            <div style="background-color: #FFF9E6; border-left: 4px solid #FFDA00; padding: 15px 20px; margin: 25px 0; border-radius: 4px;">
                                                <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6;">
                                                    <strong style="color: #000000;">Was passiert jetzt?</strong><br>
                                                    Unser Team prüft Ihre Anfrage und meldet sich innerhalb von 24 Stunden bei Ihnen zurück. 
                                                    Wir freuen uns darauf, Sie kennenzulernen!
                                                </p>
                                            </div>
                                            
                                            <p style="margin: 20px 0 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                Sollten Sie weitere Fragen haben, können Sie jederzeit auf diese E-Mail antworten.
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background-color: #000000; padding: 30px; text-align: center;">
                                            <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 16px; font-weight: bold;">
                                                sellBridge
                                            </p>
                                            <p style="margin: 0 0 15px 0; color: #CCCCCC; font-size: 14px;">
                                                Rathausweg 10 • 49661 Cloppenburg
                                            </p>
                                            <p style="margin: 0 0 5px 0;">
                                                <a href="mailto:{self.sender_email}" style="color: #FFDA00; text-decoration: none; font-size: 14px;">
                                                    {self.sender_email}
                                                </a>
                                            </p>
                                            <p style="margin: 15px 0 0 0; color: #888888; font-size: 12px;">
                                                © 2025 sellBridge. Alle Rechte vorbehalten.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
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
