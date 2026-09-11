class Student {
  public name: string
  private age: number
  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }

  public introduce(): void {
    console.log(`My name is ${this.name}`);
  }
}

const student = new Student("", 17);

console.log(student.name); // ✅ Allowed

student.introduce(); // ✅ Allowed

// console.log(student.age); // ❌ Error

/** =================================================== */
/**                    ENCAPSULATION                    */
/** =================================================== */
class BankAccount {
  private balance: number
  constructor(balance:number) {
    this.balance = balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000000);
account.deposit(500000);
account.withdraw(250000);
console.log(account.getBalance());


/** =================================================== */
/**                    INHERITANCE                      */
/** =================================================== */
class Person {
  public name: string
  public age: number
  constructor(
    name: string,
    age: number
  ) { this.name = name
    this.age = age}

  introduce(): void {
    console.log(`My name is ${this.name}`);
  }
}

class Instructor extends Person {
  public grade: number
  constructor(
    name: string,
    age: number,
    grade:number
  ) {
    super(name, age);
    this.grade = grade
  }

  study(): void {
    console.log(`${this.name} is teaching.`);
  }
}

const instructor = new Instructor(
  "Jude Bellingham",
  17,
  11
);

instructor.introduce();
instructor.study();

/** =================================================== */
/**                    POLYMORPHISM                     */
/** =================================================== */
class Notification {
  send(): void {
    console.log("Sending notification...");
  }
}

class EmailNotification extends Notification {
  send(): void {
    console.log("Sending email...");
  }
}

class SMSNotification extends Notification {
  send(): void {
    console.log("Sending SMS...");
  }
}

class WhatsAppNotification extends Notification {
  send(): void {
    console.log("Sending WhatsApp message...");
  }
}

const notifications: Notification[] = [
  new EmailNotification(),
  new SMSNotification(),
  new WhatsAppNotification()
];

for (const notification of notifications) {
  notification.send();
}