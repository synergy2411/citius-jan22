import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, from, of, Subscription, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements AfterViewInit{

  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next("First Package")
    },1000)
    setTimeout(()=>{
      observer.next("Second Package")
    },3000)
    setTimeout(()=>{
      // observer.next("Third Package")
      observer.error(new Error("Something bad happened here..."))
    },5000)
    setTimeout(() => {
      observer.complete();
    }, 6000);
  })

  onSubscribe(){
    this.obs$.subscribe({
      next : (data) =>{console.log(data)},
      error : err => {console.error(err)},
      complete : () => console.log("COMPLETED")
    })
  }

  onUnsubscribe(){}

  ngAfterViewInit(): void {

  }



  // source1$ = interval(1000)

  // fruits = ["apple","banana", "oranges", "guava"];

  // source2$ = from(this.fruits)

  // source3$ = of("apple", 101, true, "Hello Wordl")

  // unSub$ : Subscription;

  // source4$ = fromEvent(document, "click");

  // constructor(){
  //   // this.source4$.subscribe((eventData) => {
  //   //   console.log(eventData);
  //   // })
  // }

  // @ViewChild("search") searchInput : ElementRef;
  // @ViewChild("btnObservable") btn : ElementRef;

  // ngAfterViewInit(): void {

  //   let source7$ = fromEvent(this.searchInput.nativeElement, "input");
  //   source7$.subscribe(console.log);

  //   let source6$ =fromEvent(this.btn.nativeElement, "click")
  //   source6$.subscribe((data) => {
  //     console.log(data)
  //   })
  // }

  // onSubscribe(){
  //   this.unSub$ = this.source1$.subscribe({
  //     next : data => {console.log(data)},
  //     error : err => {},
  //     complete : () => {console.log("[COMPLTED]")}
  //   })
  // }

  // onUnsubscribe(){
  //   this.unSub$.unsubscribe();
  // }

}
