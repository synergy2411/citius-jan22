import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { UsersComponent } from './components/users/users.component';

export const APP_ROUTES : Routes = [
  {
    path : "login",              // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "users",
    component : UsersComponent
  },{
    path : "notes",
    component : NotesComponent
  },{
    path : "**",                // http://localhost:4200/notexist
    redirectTo : "/login"
  }
]
