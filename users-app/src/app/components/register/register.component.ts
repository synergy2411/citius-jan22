import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');

  registrationForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.registrationForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  onRegister(){
    console.log(this.registrationForm);
  }

  ngOnInit(): void {
  }

}
