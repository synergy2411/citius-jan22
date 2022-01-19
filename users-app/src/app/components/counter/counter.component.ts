import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;
  constructor(private counterService : CounterService) { }


  ngOnInit(): void {
    this.counterService.getCounter()
      .subscribe((counter : number) => {
        this.counter = counter;
      });
  }

  increaseCounter(){
    this.counterService.increaseCounter();
  }

  onReset(){
    this.counterService.counter = 0;
  }

}
