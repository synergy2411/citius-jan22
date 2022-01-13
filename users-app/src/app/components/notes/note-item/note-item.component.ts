import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note : string;
  @Output() noteSelectEvent = new EventEmitter<string>()

  onNoteSelect(){
    this.noteSelectEvent.emit(this.note);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
