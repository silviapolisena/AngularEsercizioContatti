import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcontactsComponent } from './features/allcontacts/allcontacts.component';
import { ContactdetailsComponent } from './features/contactdetails/contactdetails.component';
import { FavoritecontactsComponent } from './features/favoritecontacts/favoritecontacts.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {path: 'allcontacts', component: AllcontactsComponent},
  {path: 'favoritecontacts', component: FavoritecontactsComponent},
  {path: 'contactdetails/:id', component: ContactdetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'allcontacts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
