import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  invalidLogin: boolean;

  counter = 0;

  isLoggedIn = this.app.loggedIn;

  constructor(private router: Router, private app: AppService) {
  
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.minLength(2), Validators.required]),
      password: new FormControl('', [Validators.minLength(2), Validators.required])
    });
  }

  submit() {

    if (this.formLogin.get('username').value !== 'silvia' ||
      (this.formLogin.get('password').value !== '123')) {
      this.invalidLogin = true;
      console.log(this.counter++);
      console.log('invalid username or password');
      this.app.loggedIn.next(false);

    } else if (this.formLogin.get('username').value === 'silvia' &&
      (this.formLogin.get('password').value === '123')) {
      this.invalidLogin = false;
      this.router.navigateByUrl('allcontacts');
      console.log('login');
      this.app.loggedIn.next(true);
    }
  }

   logout() {                            // {4}
    this.app.loggedIn.next(false);
    this.router.navigateByUrl('/login');
  }

}
