import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CounterService {

  subject = new Subject();

  private _counter = 0;

  get counter(){
    return this._counter
  }
  set counter(value : number){
    this._counter = value
  }

  increaseCounter(){
    // this._counter++;
    this.subject.next(this._counter++)
  }

  constructor() {
    this.subject.next(this._counter);
  }

  getCounter(){
    return this.subject;
  }


}
