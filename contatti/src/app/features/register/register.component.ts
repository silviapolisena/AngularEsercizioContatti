import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formRegister = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      username: new FormControl('',[Validators.minLength(2), Validators.required]),
      password: new FormControl('',[Validators.minLength(2), Validators.required])
    });
  }
}
