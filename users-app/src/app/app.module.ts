import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { ButtonComponent } from './components/button/button.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteItemComponent } from './components/notes/note-item/note-item.component';
import { NoteEditComponent } from './components/notes/note-edit/note-edit.component';
import { CommentItemComponent } from './components/users/comment-item/comment-item.component';
import { AddCommentComponent } from './components/users/add-comment/add-comment.component';

@NgModule({
  declarations: [     // Component / Directive / Pipe
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    ButtonComponent,
    LifeCycleDemoComponent,
    NotesComponent,
    NoteItemComponent,
    NoteEditComponent,
    CommentItemComponent,
    AddCommentComponent
  ],
  imports: [          // Modules - Built-in or Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Service Registration
  bootstrap: [AppComponent]
})
export class AppModule { }
