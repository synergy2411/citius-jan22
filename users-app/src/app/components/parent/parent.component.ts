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

  fruits = [
    {id : 1, name : "apple"},
    {id : 2, name : "oranges"},
    {id : 3, name : "guava"},
  ];

  onAddFruit(){
    this.fruits = [
      {id : 1, name : "apple"},
      {id : 2, name : "oranges"},
      {id : 3, name : "kiwi"},
      {id : 4, name : "kiwi"}
    ];
  }

  trackById(id, el){
    return el.name;
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
