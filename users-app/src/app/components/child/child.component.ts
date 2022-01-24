import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() user : any;

  constructor() { }

  ngOnInit(): void {
  }

}
