import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  onLogout(){
    this.authService.onLogout();
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
  }

}
