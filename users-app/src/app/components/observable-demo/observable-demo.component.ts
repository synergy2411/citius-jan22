import { Component, OnInit } from '@angular/core';
import { interval, from, of, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent{

  source1$ = interval(1000)

  fruits = ["apple","banana", "oranges", "guava"];

  source2$ = from(this.fruits)

  source3$ = of("apple", 101, true, "Hello Wordl")

  unSub$ : Subscription;

  onSubscribe(){
    this.unSub$ = this.source1$.subscribe({
      next : data => {console.log(data)},
      error : err => {},
      complete : () => {console.log("[COMPLTED]")}
    })
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

}
