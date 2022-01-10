import { HasFormatter } from '../model/hasFormat';

export class Invoice implements HasFormatter{
  constructor(
    private title: string,
    private createdAt: Date,
    private amount: number
  ) {}

  format(){
      return `Amount ${'$'+this.amount} to be charge for ${this.title}`
  }

}
