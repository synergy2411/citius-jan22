import { HasFormatter } from "../model/hasFormat";

export class Invoice implements HasFormatter {
  constructor(
    private title: string,
    private createdAt: Date,
    private amount: number
  ) {}

  format() {
    const day = this.createdAt.toLocaleString("en-US", { day: "numeric" });
    const month = this.createdAt.toLocaleString("en-US", { month: "long" });
    const year = this.createdAt.getFullYear();
    return `${month} ${day}, ${year} - Amount ${
      "$" + this.amount
    } to be charge for ${this.title}`;
  }
}
