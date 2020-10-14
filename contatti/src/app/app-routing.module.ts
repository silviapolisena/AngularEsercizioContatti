import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcontactsComponent } from './features/allcontacts/allcontacts.component';
import { ContactdetailsComponent } from './features/contactdetails/contactdetails.component';
import { FavoritecontactsComponent } from './features/favoritecontacts/favoritecontacts.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  {path: 'allcontacts', component: AllcontactsComponent},
  {path: 'favoritecontacts', component: FavoritecontactsComponent},
  {path: 'contactdetails/:id', component: ContactdetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
