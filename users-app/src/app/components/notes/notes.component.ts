import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes : Array<string> = ["shopping", "grocery","planting","insurance"]
  selectedNote : {id : number, text : string};
  showNoteEditComp : boolean = false;

  onSelectNote(note : string){
    const index = this.notes.findIndex(n => n.toUpperCase() === note.toUpperCase())
    this.selectedNote = {id : index, text : note};
    console.log("Selected Note : ", note);
    this.showNoteEditComp = true;
  }

  deleteNote(note: {id: number, text:string}){
    const position = this.notes.findIndex(n => n.toUpperCase() === note.text.toUpperCase())
    this.notes.splice(position, 1)
    this.showNoteEditComp = false;
  }

  editNote(editedNote : {id : number, text : string}){
    console.log("Edited Note : ", editedNote);
    this.notes[editedNote.id] = editedNote.text;
    this.showNoteEditComp = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
