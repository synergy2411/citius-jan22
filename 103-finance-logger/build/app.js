"use strict";
// import { Invoice } from './classes/invoice';
// import { Payment } from './classes/payment';
class Payment {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `Amount ${'$' + this.amount} to be paid for ${this.title}`;
    }
}
class Invoice {
    constructor(title, createdAt, amount) {
        this.title = title;
        this.createdAt = createdAt;
        this.amount = amount;
    }
    format() {
        return `Amount ${'$' + this.amount} to be charge for ${this.title}`;
    }
}
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        const h5 = document.createElement("h5");
        h5.className = "float-right";
        h5.innerHTML = heading.toUpperCase();
        li.append(h5);
        const p = document.createElement("p");
        p.innerHTML = item.format();
        li.append(p);
        this.container.append(li);
    }
}
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
