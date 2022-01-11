import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [     // Component / Directive / Pipe
    AppComponent,
    UsersComponent
  ],
  imports: [          // Modules - Built-in or Custom
    BrowserModule
  ],
  providers: [],      // Service Registration
  bootstrap: [AppComponent, UsersComponent]
})
export class AppModule { }
