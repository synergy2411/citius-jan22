// import { Invoice } from './classes/invoice';
// import { Payment } from './classes/payment';

interface HasFormatter{
    format : () => string;
}

class Payment implements HasFormatter{
    constructor(
        private title : string,
        private createdAt : Date,
        private amount : number
        ){}
    format(){
        return `Amount ${'$'+this.amount} to be paid for ${this.title}`
    }
}

class Invoice implements HasFormatter{
    constructor(
      private title: string,
      private createdAt: Date,
      private amount: number
    ) {}
  
    format(){
        return `Amount ${'$'+this.amount} to be charge for ${this.title}`
    }
  
  }

  class ListTemplate{
      constructor(private container : HTMLUListElement){}
      render(item : HasFormatter, heading : string){
          const li = document.createElement("li");
          li.className="list-group-item";
          const h5 = document.createElement("h5");
          h5.className = "float-right";
          h5.innerHTML= heading.toUpperCase();
          li.append(h5);
          const p = document.createElement("p");
          p.innerHTML = item.format();
          li.append(p);
          this.container.append(li);
      }
  }

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