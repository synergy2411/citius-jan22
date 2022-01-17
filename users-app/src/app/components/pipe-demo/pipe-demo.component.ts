import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent {
  someData = 'Some data';

  contactNumber = 987654321;

  filteredStatus: string = '';

  todoCollection = [
    { label: 'shopping', status: 'pending' },
    { label: 'planting', status: 'completed' },
    { label: 'grocery', status: 'pending' },
    { label: 'insurance', status: 'completed' },
  ];

  orderType : string = "ASC";

  promise = new Promise((resolve, reject) => {
    // Remote Server Call
    setTimeout(() => {
      resolve('argh argh');
      // reject(new Error("Something bad happened"))
    }, 3000);
  }).catch((err) => console.log(err));

  onAddNewTodo() {
    this.todoCollection.push({label : "New Item", status : "pending"})
    // this.todoCollection = [
    //   { label: 'shopping', status: 'pending' },
    //   { label: 'planting', status: 'completed' },
    //   { label: 'grocery', status: 'pending' },
    //   { label: 'insurance', status: 'completed' },
    //   { label: 'New ITem', status: 'pending' },
    // ];
  }
}
