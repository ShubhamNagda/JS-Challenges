class bankAccount {
    constructor(accountNumber, initialBalance, interestRate) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.interestRate = interestRate;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            console.log(`Deposited ${amount}, total balance is ${this.balance}`)
        }
        else {
            console.log(`Please Enter Valid Amount`)
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Invalid withdrawal amount. Please enter a positive amount.");
        }
    }
    calculateInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Interest accrued: ${interest}. New balance: ${this.balance}`);
    }
}


const account1 = new bankAccount("12345", 1000, 0.05);
account1.deposit(500);
account1.withdraw(200);
account1.calculateInterest();
