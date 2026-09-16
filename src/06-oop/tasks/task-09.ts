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
        console.log("Message:",this.message);
    }
}

class EmailNotification extends Notification{
    public recipient:string;
    constructor(r:string,m:string){
        super(m);
        this.recipient = r;
    }
    send() {
        console.log("To:",this.recipient)
        console.log("Email Message:",this.message);
    }
}

class SmsNotification extends Notification {
    public recipient:string;
    constructor(r:string,m:string){
        super(m);
        this.recipient = r;
    }
    send() {
        console.log("SMS Message:",this.message);
    }
}

class PushNotification extends Notification {
    public device:string;
    constructor(d:string,m:string){
        super(m);
        this.device = d;
    }
    send() {
        console.log("Notification Message:",this.message);
    }
}
const notifications: Notification[] = [
    new EmailNotification("Nathan","Dear Deer"),
    new SmsNotification("YAHU","Hello World"),
    new PushNotification("Maven","OI PUSH GITHUB")
];

for (const notification of notifications) {
    notification.send();
}