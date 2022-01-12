import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  @Input() txtButton : string;

  @Output() btnClick = new EventEmitter<any>()

  onBtnClick(event: {target : HTMLButtonElement}){
    this.btnClick.emit(event)
  }
}
