export class Invoice {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        const day = this.createdAt.toLocaleString("en-US", { day: "numeric" });
        const month = this.createdAt.toLocaleString("en-US", { month: "long" });
        const year = this.createdAt.getFullYear();
        return `${month} ${day}, ${year} - Amount ${"$" + this.amount} to be charge for ${this.title}`;
    }
}
