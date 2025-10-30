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
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                    <!-- Header mit Logo -->
                                    <tr>
                                        <td style="background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 4px solid #FFDA00;">
                                            <img src="https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/yywulo3y_logo.png" 
                                                 alt="sellBridge Logo" 
                                                 style="height: 50px; width: auto; display: inline-block;">
                                        </td>
                                    </tr>
                                    
                                    <!-- Gelber Akzent-Streifen -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #FFDA00 0%, #FFC700 100%); padding: 20px 30px; text-align: center;">
                                            <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: bold;">
                                                Vielen Dank für Ihre Anfrage!
                                            </h1>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 30px;">
                                            <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                Hallo {customer_name},
                                            </p>
                                            
                                            <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                wir haben Ihre Anfrage zu <strong style="color: #000000;">{inquiry_subject}</strong> erhalten und bedanken uns für Ihr Interesse an sellBridge.
                                            </p>
                                            
                                            <div style="background-color: #FFF9E6; border-left: 4px solid #FFDA00; padding: 20px; margin: 25px 0; border-radius: 4px;">
                                                <p style="margin: 0 0 10px 0; color: #000000; font-size: 16px; font-weight: bold;">
                                                    ⏱️ Was passiert jetzt?
                                                </p>
                                                <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6;">
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
                                            <p style="margin: 0 0 5px 0; color: #CCCCCC; font-size: 14px;">
                                                Rathausweg 10
                                            </p>
                                            <p style="margin: 0 0 15px 0; color: #CCCCCC; font-size: 14px;">
                                                49661 Cloppenburg
                                            </p>
                                            <p style="margin: 0 0 5px 0;">
                                                <a href="mailto:{self.sender_email}" style="color: #FFDA00; text-decoration: none; font-size: 14px;">
                                                    {self.sender_email}
                                                </a>
                                            </p>
                                            <p style="margin: 0 0 5px 0; color: #CCCCCC; font-size: 14px;">
                                                +49 123 456 7890
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
            
            phone_info = f"""
                <tr>
                    <td style="padding: 10px 15px; background-color: #f9f9f9; border-left: 4px solid #FFDA00; text-align: left;">
                        <strong style="color: #000000;">Telefon:</strong> {customer_phone}
                    </td>
                </tr>
            """ if customer_phone else ""
            
            company_info = f"""
                <tr>
                    <td style="padding: 10px 15px; background-color: #f9f9f9; border-left: 4px solid #FFDA00; text-align: left;">
                        <strong style="color: #000000;">Unternehmen:</strong> {company_name}
                    </td>
                </tr>
            """ if company_name else ""
            
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
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                    <!-- Header mit Logo -->
                                    <tr>
                                        <td style="background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 4px solid #FFDA00;">
                                            <img src="https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/yywulo3y_logo.png" 
                                                 alt="sellBridge Logo" 
                                                 style="height: 50px; width: auto; display: inline-block;">
                                        </td>
                                    </tr>
                                    
                                    <!-- Gelber Akzent-Streifen -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #FFDA00 0%, #FFC700 100%); padding: 20px 30px; text-align: center;">
                                            <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: bold;">
                                                🔔 Neue Kundenanfrage erhalten
                                            </h1>
                                        </td>
                                    </tr>
                                    
                                    <!-- Kundeninformationen -->
                                    <tr>
                                        <td style="padding: 30px; text-align: left;">
                                            <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 20px; border-bottom: 3px solid #FFDA00; padding-bottom: 10px;">
                                                Kundendaten
                                            </h2>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                                <tr>
                                                    <td style="padding: 10px 15px; background-color: #f9f9f9; border-left: 4px solid #FFDA00; border-radius: 4px 4px 0 0; text-align: left;">
                                                        <strong style="color: #000000;">Name:</strong> {customer_name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 10px 15px; background-color: #ffffff; border-left: 4px solid #e0e0e0; text-align: left;">
                                                        <strong style="color: #000000;">E-Mail:</strong> 
                                                        <a href="mailto:{customer_email}" style="color: #0066cc; text-decoration: none;">
                                                            {customer_email}
                                                        </a>
                                                    </td>
                                                </tr>
                                                {phone_info}
                                                {company_info}
                                                <tr>
                                                    <td style="padding: 10px 15px; background-color: #FFF9E6; border-left: 4px solid #FFDA00; border-radius: 0 0 4px 4px; text-align: left;">
                                                        <strong style="color: #000000;">Interesse:</strong> {inquiry_subject}
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <h3 style="margin: 0 0 15px 0; color: #000000; font-size: 18px;">
                                                📝 Nachricht des Kunden:
                                            </h3>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #FFDA00; border-radius: 4px;">
                                                        <pre style="margin: 0; font-family: Arial, sans-serif; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">{inquiry_message}</pre>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <div style="height: 25px;"></div>
                                            
                                            <div style="background-color: #000000; padding: 15px 20px; border-radius: 4px; text-align: center;">
                                                <p style="margin: 0; color: #FFDA00; font-size: 14px; font-weight: bold;">
                                                    💡 Klicken Sie auf "Antworten", um dem Kunden direkt zu antworten
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background-color: #f5f5f5; padding: 20px 30px; border-top: 1px solid #e0e0e0;">
                                            <p style="margin: 0; color: #666666; font-size: 12px; line-height: 1.5; text-align: center;">
                                                Diese E-Mail wurde automatisch vom sellBridge Kontaktformular generiert.<br>
                                                Sie können direkt auf diese E-Mail antworten, um den Kunden zu kontaktieren.
                                            </p>
                                            <p style="margin: 10px 0 0 0; color: #999999; font-size: 11px; text-align: center;">
                                                sellBridge • Rathausweg 10 • 49661 Cloppenburg
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
    
    def send_appointment_confirmation_customer(
        self,
        customer_email: str,
        customer_name: str,
        appointment_datetime: str,
        customer_phone: str = None
    ) -> bool:
        """Sendet Terminbestätigung an den Kunden."""
        try:
            subject = "Terminbestätigung: Ihr Beratungsgespräch bei sellBridge"
            
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
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                    <!-- Header mit Logo -->
                                    <tr>
                                        <td style="background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 4px solid #FFDA00;">
                                            <img src="https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/yywulo3y_logo.png" 
                                                 alt="sellBridge Logo" 
                                                 style="height: 50px; width: auto; display: inline-block;">
                                        </td>
                                    </tr>
                                    
                                    <!-- Gelber Akzent-Streifen -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #FFDA00 0%, #FFC700 100%); padding: 20px 30px; text-align: center;">
                                            <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: bold;">
                                                ✓ Termin erfolgreich gebucht!
                                            </h1>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 30px;">
                                            <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                Hallo {customer_name},
                                            </p>
                                            
                                            <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                                                vielen Dank für Ihre Terminbuchung! Wir freuen uns auf das persönliche Beratungsgespräch mit Ihnen.
                                            </p>
                                            
                                            <!-- Termin-Details Box -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                                <tr>
                                                    <td style="background-color: #FFF9E6; border-left: 4px solid #FFDA00; padding: 20px; border-radius: 4px;">
                                                        <p style="margin: 0 0 10px 0; color: #000000; font-size: 16px; font-weight: bold;">
                                                            📅 Ihr Termin:
                                                        </p>
                                                        <p style="margin: 0 0 5px 0; color: #333333; font-size: 18px; font-weight: bold;">
                                                            {appointment_datetime}
                                                        </p>
                                                        <p style="margin: 0; color: #666666; font-size: 14px;">
                                                            Dauer: 30 Minuten
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Wichtiger Hinweis -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                                <tr>
                                                    <td style="background-color: #f9f9f9; padding: 20px; border-radius: 4px;">
                                                        <p style="margin: 0 0 10px 0; color: #000000; font-size: 16px; font-weight: bold;">
                                                            📞 So läuft das Gespräch ab:
                                                        </p>
                                                        <p style="margin: 0 0 10px 0; color: #333333; font-size: 15px; line-height: 1.6;">
                                                            Wir werden Sie zum vereinbarten Zeitpunkt unter Ihrer hinterlegten Telefonnummer anrufen:
                                                        </p>
                                                        <p style="margin: 0; color: #000000; font-size: 16px; font-weight: bold;">
                                                            {customer_phone or 'Nicht angegeben'}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Vorbereitung -->
                                            <div style="background-color: #E8F5E9; border-left: 4px solid #4CAF50; padding: 15px 20px; border-radius: 4px; margin-bottom: 25px;">
                                                <p style="margin: 0 0 8px 0; color: #2E7D32; font-size: 14px; font-weight: bold;">
                                                    💡 Tipp zur Vorbereitung:
                                                </p>
                                                <p style="margin: 0; color: #2E7D32; font-size: 14px; line-height: 1.5;">
                                                    Halten Sie gerne Informationen zu Ihren Produkten und aktuellen Herausforderungen im E-Commerce bereit.
                                                </p>
                                            </div>
                                            
                                            <p style="margin: 0 0 10px 0; color: #333333; font-size: 15px; line-height: 1.6;">
                                                Bei Fragen oder Änderungswünschen können Sie uns jederzeit unter <a href="mailto:{self.sender_email}" style="color: #FFDA00; text-decoration: none;">{self.sender_email}</a> kontaktieren.
                                            </p>
                                            
                                            <p style="margin: 20px 0 0 0; color: #333333; font-size: 15px; line-height: 1.6;">
                                                Wir freuen uns auf das Gespräch mit Ihnen!
                                            </p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background-color: #000000; padding: 30px; text-align: center;">
                                            <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 16px; font-weight: bold;">
                                                sellBridge
                                            </p>
                                            <p style="margin: 0 0 5px 0; color: #CCCCCC; font-size: 14px;">
                                                Rathausweg 10
                                            </p>
                                            <p style="margin: 0 0 15px 0; color: #CCCCCC; font-size: 14px;">
                                                49661 Cloppenburg
                                            </p>
                                            <p style="margin: 0 0 5px 0;">
                                                <a href="mailto:{self.sender_email}" style="color: #FFDA00; text-decoration: none; font-size: 14px;">
                                                    {self.sender_email}
                                                </a>
                                            </p>
                                            <p style="margin: 0 0 5px 0; color: #CCCCCC; font-size: 14px;">
                                                +49 123 456 7890
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
            logger.error(f"Fehler beim Senden der Terminbestätigung an Kunden: {str(e)}")
            return False
    
    def send_appointment_notification_admin(
        self,
        customer_email: str,
        customer_name: str,
        customer_phone: str,
        appointment_datetime: str,
        message: str = None
    ) -> bool:
        """Sendet Terminbenachrichtigung an Admin."""
        try:
            subject = f"Neuer Termin gebucht: {appointment_datetime} mit {customer_name}"
            
            message_section = f"""
                <tr>
                    <td style="padding: 10px 15px; background-color: #f9f9f9; border-left: 4px solid #FFDA00;">
                        <strong style="color: #000000;">Nachricht:</strong><br>
                        <span style="color: #333333;">{message}</span>
                    </td>
                </tr>
            """ if message else ""
            
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
                                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                    <!-- Header mit Logo -->
                                    <tr>
                                        <td style="background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 4px solid #FFDA00;">
                                            <img src="https://customer-assets.emergentagent.com/job_4143fb9e-6acb-4cbf-a312-06fb39f285b2/artifacts/yywulo3y_logo.png" 
                                                 alt="sellBridge Logo" 
                                                 style="height: 50px; width: auto; display: inline-block;">
                                        </td>
                                    </tr>
                                    
                                    <!-- Gelber Akzent-Streifen -->
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #FFDA00 0%, #FFC700 100%); padding: 20px 30px; text-align: center;">
                                            <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: bold;">
                                                📅 Neuer Beratungstermin gebucht
                                            </h1>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 30px;">
                                            <!-- Termin-Details -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px; background-color: #FFF9E6; border-left: 4px solid #FFDA00; border-radius: 4px;">
                                                <tr>
                                                    <td style="padding: 20px;">
                                                        <p style="margin: 0 0 10px 0; color: #000000; font-size: 18px; font-weight: bold;">
                                                            ⏰ Termin:
                                                        </p>
                                                        <p style="margin: 0; color: #333333; font-size: 20px; font-weight: bold;">
                                                            {appointment_datetime}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Kundendaten -->
                                            <h2 style="margin: 0 0 15px 0; color: #000000; font-size: 18px; border-bottom: 3px solid #FFDA00; padding-bottom: 10px;">
                                                Kundendaten
                                            </h2>
                                            
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                                                <tr>
                                                    <td style="padding: 10px 15px; background-color: #f9f9f9; border-left: 4px solid #FFDA00; border-radius: 4px 4px 0 0;">
                                                        <strong style="color: #000000;">Name:</strong> {customer_name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 10px 15px; background-color: #ffffff; border-left: 4px solid #e0e0e0;">
                                                        <strong style="color: #000000;">E-Mail:</strong> 
                                                        <a href="mailto:{customer_email}" style="color: #0066cc; text-decoration: none;">
                                                            {customer_email}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 10px 15px; background-color: #f9f9f9; border-left: 4px solid #FFDA00; border-radius: 0 0 4px 4px;">
                                                        <strong style="color: #000000;">Telefon:</strong> {customer_phone or 'Nicht angegeben'}
                                                    </td>
                                                </tr>
                                                {message_section}
                                            </table>
                                            
                                            <!-- Erinnerung -->
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="background-color: #000000; padding: 15px 20px; border-radius: 4px; text-align: center;">
                                                        <p style="margin: 0; color: #FFDA00; font-size: 14px; font-weight: bold;">
                                                            💡 Erinnerung: Kunden zum vereinbarten Zeitpunkt unter angegebener Nummer anrufen
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="background-color: #f5f5f5; padding: 20px 30px; border-top: 1px solid #e0e0e0;">
                                            <p style="margin: 0; color: #666666; font-size: 12px; line-height: 1.5; text-align: center;">
                                                Diese E-Mail wurde automatisch vom sellBridge Buchungssystem generiert.<br>
                                                Der Termin wurde auch in Ihrem Google Calendar "sellbridge" eingetragen.
                                            </p>
                                            <p style="margin: 10px 0 0 0; color: #999999; font-size: 11px; text-align: center;">
                                                sellBridge • Rathausweg 10 • 49661 Cloppenburg
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
                recipient_email=self.sender_email,
                subject=subject,
                html_body=html_body
            )
            
        except Exception as e:
            logger.error(f"Fehler beim Senden der Admin-Benachrichtigung: {str(e)}")
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
