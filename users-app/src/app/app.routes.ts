import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { PostsComponent } from './components/posts/posts.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { ProductsComponent } from './components/products/products.component';
import { SpecificationComponent } from './components/products/specification/specification.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { DeactivatedRouteService } from './services/deactivated-route.service';
import { LoginGaurdService } from './services/login-gaurd.service';
import { PostsResolveService } from './services/posts-resolve.service';

export const APP_ROUTES : Routes = [
  {
    path : "",
    redirectTo : "login",
    pathMatch : 'full'
  },{
    path : "register",
    component : RegisterComponent,
    canDeactivate : [DeactivatedRouteService]
  },{
    path : "login",              // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "users",
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "notes",
    component : NotesComponent
  },{
    path : "posts",
    component : PostsComponent,
    resolve : {posts : PostsResolveService}
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
