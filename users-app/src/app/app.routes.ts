import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { ProductsComponent } from './components/products/products.component';
import { SpecificationComponent } from './components/products/specification/specification.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';

export const APP_ROUTES : Routes = [
  {
    path : "",
    redirectTo : "login",
    pathMatch : 'full'
  },{
    path : "register",
    component : RegisterComponent
  },{
    path : "login",              // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "users",
    component : UsersComponent
  },{
    path : "notes",
    component : NotesComponent
  },{
    path : "product",
    component : ProductsComponent,
    children : [
      {path : "overview/:id/:prodName", component : OverviewComponent},
      {path : "specification", component: SpecificationComponent}
    ]
  },{
    path : "**",                // http://localhost:4200/notexist
    redirectTo : "login"
  }
]
