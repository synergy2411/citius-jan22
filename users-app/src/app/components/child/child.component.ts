import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, AfterViewInit {

  @ViewChild("formcontrol") control : ElementRef;

  @Input() user : any;

  constructor() { }
  ngAfterViewInit(): void {
  //  console.log(this.control.nativeElement);
  }

  ngOnInit(): void {
  }

}
