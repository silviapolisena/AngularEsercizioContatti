import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { AppService } from './service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatti';

  isLoggedInLogin$: Observable<boolean>; 
  isLoggedInRegister$: Observable<boolean>; 

  constructor(private login: LoginComponent, private register: RegisterComponent){

  this.isLoggedInLogin$ = this.login.isLoggedIn;
  this.isLoggedInRegister$ = this.register.isLoggedIn;
  
  }

  logout(){
    this.login.logout();
  }

 /* isLogged(){
    this.login.isLogged();
  }*/

}