import { HasFormatter } from '../model/hasFormat.js';

export class ListTemplate{
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