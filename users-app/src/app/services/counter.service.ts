import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class CounterService {

  private _counter = 0;

  get counter(){
    return this._counter
  }
  set counter(value : number){
    this._counter = value
  }

  increaseCounter(){
    this._counter++;
  }

  constructor() { }
}
