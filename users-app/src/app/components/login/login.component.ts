import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm : NgForm){
    console.log(loginForm);
    const {email, password} = loginForm.value;
    this.authService.onLogin(email, password)
      .subscribe((response : any) => {
        if(response.message === "SUCCESS"){
          this.router.navigate(['/users'])
        }
      })
  }

  onReset(loginForm : NgForm){
    loginForm.reset();
  }

}
