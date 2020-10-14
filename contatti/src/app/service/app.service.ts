import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  loggedIn = new BehaviorSubject<boolean>(false); 

  get isLogged() {
    return this.loggedIn.asObservable(); 
  }

}
