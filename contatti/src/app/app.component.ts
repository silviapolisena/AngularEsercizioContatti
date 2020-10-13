import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './features/login/login.component';
import { AppService } from './service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatti';

  isLoggedIn$: Observable<boolean>; 

  constructor(private login: LoginComponent){

  this.isLoggedIn$ = this.login.isLoggedIn;
  }

  logout(){
    this.login.logout();
  }

 /* isLogged(){
    this.login.isLogged();
  }*/

}