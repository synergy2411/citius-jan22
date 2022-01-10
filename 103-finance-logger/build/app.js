import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/list-template.js';
window.onload = () => {
    const btnAdd = document.querySelector("#btnAdd");
    const selType = document.querySelector("#selType");
    const title = document.querySelector("#title");
    const createdAt = document.querySelector("#createdAt");
    const amount = document.querySelector("#amount");
    const ul = document.querySelector("#lists");
    let container = new ListTemplate(ul);
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        let doc;
        if (selType.value === 'payment') {
            doc = new Payment(title.value, new Date(createdAt.value), Number(amount.value));
        }
        else {
            doc = new Invoice(title.value, new Date(createdAt.value), Number(amount.value));
        }
        container.render(doc, selType.value);
        console.log(doc);
    });
};
