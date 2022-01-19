import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-subjects-demo',
  templateUrl: './subjects-demo.component.html',
  styleUrls: ['./subjects-demo.component.css']
})
export class SubjectsDemoComponent implements OnInit{


  ngOnInit(): void {

    const sub = new ReplaySubject(2);

    sub.next(99)
    sub.next(199)
    sub.next(209)

    sub.subscribe(data => console.log("Subs 1 : ", data))

    sub.next(249)
    sub.next(289)
    sub.subscribe(data => console.log("Subs 2 : ", data))




      // const sub = new BehaviorSubject(99);

      // sub.subscribe(val => console.log("Subscriber 1 : ", val))

      // sub.next(101);

      // sub.subscribe(val => console.log("Subscriber 2 : ", val))

      // sub.next(111);

      // sub.subscribe(val => console.log("Subscriber 3 : ", val))






      // const subject = new Subject()
      // subject.subscribe((data) => {
      //   console.log("Subscriber 01 : ", data)
      // })

      // subject.next("First Package");
      // subject.next("Second Package");

      // subject.pipe(tap(val => console.log(val))).subscribe(data => {
      //   console.log("Subscriber 02 : ", data)
      // })

      // subject.next("Third Package")

  }



}
