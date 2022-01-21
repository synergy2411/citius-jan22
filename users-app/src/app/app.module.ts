import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ButtonComponent } from './components/button/button.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { HeaderComponent } from './components/header/header.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { LoginComponent } from './components/login/login.component';
import { NoteEditComponent } from './components/notes/note-edit/note-edit.component';
import { NoteItemComponent } from './components/notes/note-item/note-item.component';
import { NotesComponent } from './components/notes/notes.component';
import { ObsOperatorsDemoComponent } from './components/obs-operators-demo/obs-operators-demo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { ProductsComponent } from './components/products/products.component';
import { SpecificationComponent } from './components/products/specification/specification.component';
import { RegisterComponent } from './components/register/register.component';
import { SubjectsDemoComponent } from './components/subjects-demo/subjects-demo.component';
import { AddCommentComponent } from './components/users/add-comment/add-comment.component';
import { CommentItemComponent } from './components/users/comment-item/comment-item.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { EmployeeModule } from './modules/employee/employee.module';
import { CountryCode } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { GlobalHttpErrorHandlerService } from './services/global-error-handler.service';
import { GlobalErrorInterceptor } from './services/global.error.interceptor';
import { RequestInterceptor } from './services/request.interceptor';
import { ResponseInterceptor } from './services/response.interceptor';


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
    AddCommentComponent,
    DirectiveDemoComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    CountryCode,
    FilterPipe,
    SortPipe,
    LoginComponent,
    RegisterComponent,
    CounterComponent,
    ObservableDemoComponent,
    ObsOperatorsDemoComponent,
    SubjectsDemoComponent,
    PostsComponent,
    NewPostComponent,
    EditPostComponent,
    HeaderComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [          // Modules - Built-in or Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass : RequestInterceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : ResponseInterceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : GlobalErrorInterceptor,
    multi : true
  },{
    provide : ErrorHandler,
    useClass : GlobalHttpErrorHandlerService
  } ],      // Service Registration
  bootstrap: [AppComponent]
})
export class AppModule { }
