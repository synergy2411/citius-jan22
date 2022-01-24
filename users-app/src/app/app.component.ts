import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'users-app';
  showComp : boolean = true;
  snippets = "<script>alert('XSS Attack')</script>";
  url = "javascript:alert('Hello from JavaScript')";

  constructor(private sanitize : DomSanitizer){
  }
}
