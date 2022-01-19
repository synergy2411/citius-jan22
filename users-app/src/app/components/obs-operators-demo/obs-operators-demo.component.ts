import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { interval, fromEvent, Observable, of, from } from 'rxjs';
import { take, takeWhile, takeUntil, distinct, filter, tap, map, debounceTime, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-obs-operators-demo',
  templateUrl: './obs-operators-demo.component.html',
  styleUrls: ['./obs-operators-demo.component.css']
})
export class ObsOperatorsDemoComponent implements AfterViewInit, DoCheck{

  intervalOne$ = interval(1000)

  @ViewChild("btnTakeUntil") btn : ElementRef;
  @ViewChild("search") searchInput : ElementRef;

  notifier$ : Observable<any>;

  numbers = [1,2,3,4,5,6,4,3,2,1];
  numbers$ = from(this.numbers)

  repoNames = [];

  ngDoCheck(): void {
      // this.repoNames = [];
  }

  ngAfterViewInit(): void {
    const source$ = fromEvent(this.searchInput.nativeElement, "input");
    source$.pipe(
      debounceTime(1000),
      map((eventdata : any) => eventdata.target.value),
      mergeMap((searchTerm : string) => {
        return ajax.getJSON(`https://api.github.com/users/${searchTerm}/repos`)
      }),
      // mergeAll()
    )
    .subscribe((repos : Array<any>) => {
      repos.forEach(repo => {
        this.repoNames.push(repo.name)
      })
    })
    // .subscribe(obs$ => {
    //   obs$.subscribe(console.log);
    // })



    // this.numbers$.pipe(
    //   tap(val => console.log("[TAP 1]", val)),
    //   distinct(),
    //   tap(val => console.log("[TAP 2]", val)),
    //   filter(val => val > 3)
    // ).subscribe(console.log)


    // this.notifier$ = fromEvent(this.btn.nativeElement, "click")
      // this.intervalOne$.pipe(
      //   // take(5)
      //   // takeWhile(v => v <= 5 )
      //   takeUntil(this.notifier$)
      // ).subscribe(console.log)
  }

  constructor(){
  }

}
