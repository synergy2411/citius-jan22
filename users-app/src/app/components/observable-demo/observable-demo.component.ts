import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, from, of, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements AfterViewInit{



  source1$ = interval(1000)

  fruits = ["apple","banana", "oranges", "guava"];

  source2$ = from(this.fruits)

  source3$ = of("apple", 101, true, "Hello Wordl")

  unSub$ : Subscription;

  source4$ = fromEvent(document, "click");

  constructor(){
    // this.source4$.subscribe((eventData) => {
    //   console.log(eventData);
    // })
  }

  @ViewChild("btnObservable") btn : ElementRef<any>;

  ngAfterViewInit(): void {
    let source6$ =fromEvent(this.btn.nativeElement, "click")
    source6$.subscribe((data) => {
      console.log(data)
    })
  }

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
