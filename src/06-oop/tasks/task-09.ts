/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    public message:string;

    constructor(message:string){
        this.message = message;
    }

    send() {
        console.log("Notification Sent:",this.message);
    }
}

class EmailNotification extends Notification{
    send() {
        console.log("Email Sent:",this.message);
    }
}

class SmsNotification extends Notification {
    send() {
        console.log("SMS Sent:",this.message);
    }
}

class PushNotification extends Notification {
    send() {
        console.log("Push Notification Sent:",this.message);
    }
}
const notifications: Notification[] = [
    new EmailNotification("Dear Deer"),
    new SmsNotification("Hello World"),
    new PushNotification("OI PUSH GITHUB")
];

for (const notification of notifications) {
    notification.send();
}