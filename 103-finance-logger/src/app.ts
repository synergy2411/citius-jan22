import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './model/hasFormat.js';
import { ListTemplate } from './classes/list-template.js';

window.onload = () => {
    const btnAdd = document.querySelector("#btnAdd") as HTMLButtonElement
    const selType = document.querySelector("#selType") as HTMLSelectElement
    const title = document.querySelector("#title") as HTMLInputElement
    const createdAt = document.querySelector("#createdAt") as HTMLInputElement
    const amount = document.querySelector("#amount") as HTMLInputElement
    const ul = document.querySelector("#lists") as HTMLUListElement
    let container = new ListTemplate(ul);

    btnAdd.addEventListener("click", (event : Event)=>{
        event.preventDefault();
        let doc : HasFormatter;
        if(selType.value === 'payment'){
            doc = new Payment(title.value, new Date(createdAt.value), Number(amount.value))
        }else{
            doc = new Invoice(title.value, new Date(createdAt.value), Number(amount.value))
        }
        container.render(doc, selType.value)
        console.log(doc);
    })
}