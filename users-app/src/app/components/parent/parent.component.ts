import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user = {
    name : "Foo"
  }
  constructor() { }

  ngOnInit(): void {
  }

  onChangeVal(){
    this.user.name = "Bar"
  }
  onChangeRef(){
    this.user = {
      name : "Baz"
    }
  }
}
