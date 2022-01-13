import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  @Input() note : {id : number, text : string};
  @Output() onDeleteEvent = new EventEmitter<{id : number, text : string}>();
  @Output() onEditEvent = new EventEmitter<{id : number, text : string}>();
  constructor() { }

  onDelete(){
    this.onDeleteEvent.emit(this.note);
  }

  onEdit(){
    this.onEditEvent.emit(this.note);
  }

  ngOnInit(): void {
  }

}
