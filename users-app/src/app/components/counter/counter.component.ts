import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
  }

  getCounter(){
    return this.counterService.counter;
  }

  increaseCounter(){
    this.counterService.increaseCounter();
  }

  onReset(){
    this.counterService.counter = 0;
  }

}
