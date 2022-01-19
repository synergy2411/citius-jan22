import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    RegisterComponent.hasExclamation
  ]);

  registrationForm : FormGroup;

  courses = new FormArray([]);
  hobbies = new FormArray([]);

  addHobby(){
    const hobby = new FormGroup({
      hobbyName : new FormControl(''),
      frequency : new FormControl('')
    })
    this.hobbies.push(hobby);
  }

  addCourse(){
    this.courses.push(new FormControl(''))
  }

  removeCourse(i: number){
    this.courses.removeAt(i);
  }

  static hasExclamation (control : AbstractControl){
    const hasExcl = control.value.indexOf("!") >= 0;
    return hasExcl ? null : {hasExclamation : true}
  }

  constructor(private fb : FormBuilder) {
    this.registrationForm = this.fb.group({
      username : this.username,
      password : this.password,
      books : new FormArray([])
    })
  }

  get books(){
    return this.registrationForm.get("books") as FormArray;
  }

  addBook(){
    this.books.push(new FormControl('', [Validators.required]))
  }


  onRegister(){
    console.log(this.registrationForm);
  }

  ngOnInit(): void {
  }

}
