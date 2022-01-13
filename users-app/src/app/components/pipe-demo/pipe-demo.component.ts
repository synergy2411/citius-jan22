import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  someData = "Some data";

  promise = new Promise((resolve, reject) => {
    // Remote Server Call
    setTimeout(() => {
      resolve("argh argh")
      // reject(new Error("Something bad happened"))
    }, 3000)
  }).catch(err => console.log(err))

}
