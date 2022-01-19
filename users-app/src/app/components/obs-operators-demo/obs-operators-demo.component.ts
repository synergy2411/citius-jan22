import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, fromEvent, Observable, of } from 'rxjs';
import { take, takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-obs-operators-demo',
  templateUrl: './obs-operators-demo.component.html',
  styleUrls: ['./obs-operators-demo.component.css']
})
export class ObsOperatorsDemoComponent implements AfterViewInit{

  intervalOne$ = interval(1000)

  @ViewChild("btnTakeUntil") btn : ElementRef;
  notifier$ : Observable<any>;

  ngAfterViewInit(): void {
      this.notifier$ = fromEvent(this.btn.nativeElement, "click")
      this.intervalOne$.pipe(
        // take(5)
        // takeWhile(v => v <= 5 )
        takeUntil(this.notifier$)
      ).subscribe(console.log)
  }

  constructor(){
  }

}
