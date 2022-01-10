export class Payment {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `Amount ${'$' + this.amount} to be paid for ${this.title}`;
    }
}
