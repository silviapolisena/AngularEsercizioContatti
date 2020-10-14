import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  
  isLoggedIn = this.app.loggedIn;

  constructor(private router: Router, private app: AppService) { }

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

  submit(){
    this.app.loggedIn.next(true);
    this.router.navigateByUrl('allcontacts');
  }
}
