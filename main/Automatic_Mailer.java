import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class AutomaticMailer {

    public static void main(String[] args) {
        // Sender's email address
        String senderEmail = "your_email@gmail.com";
        // Sender's email password or an application-specific password
        String senderPassword = "your_email_password";

        // Recipient's email address
        String recipientEmail = "recipient_email@example.com";

        // Properties for the mail server
        Properties properties = new Properties();
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");

        // Session object to authenticate the sender
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            // Create a MimeMessage object
            Message message = new MimeMessage(session);

            // Set the sender and recipient addresses
            message.setFrom(new InternetAddress(senderEmail));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));

            // Set the email subject and content
            message.setSubject("Automatic Email");
            message.setText("This is an automated email sent using Java.");

            // Send the email
            Transport.send(message);

            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
