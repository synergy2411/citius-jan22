import { HasFormatter } from '../model/hasFormat';

export class Payment implements HasFormatter{
    constructor(
        private title : string,
        private createdAt : Date,
        private amount : number
        ){}
    format(){
        return `Amount ${'$'+this.amount} to be paid for ${this.title}`
    }
}