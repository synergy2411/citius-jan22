import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm : NgForm){
    console.log(loginForm);
    const { email, password } = loginForm.value;
    const user = localStorage.getItem("loggedIn")
    if(user){
      const userObj = JSON.parse(user)
      const { username, password } = userObj;
      if(username === email && password === password){
        this.router.navigate(['/users'])
      }
    }else{
      alert("Please register first...")
    }
  }

  onReset(loginForm : NgForm){
    loginForm.reset();
  }

}
