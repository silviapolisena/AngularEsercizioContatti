import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcontactsComponent } from './features/allcontacts/allcontacts.component';
import { FavoritecontactsComponent } from './features/favoritecontacts/favoritecontacts.component';

const routes: Routes = [
  {path: 'allcontacts', component: AllcontactsComponent},
  {path: 'favoritecontacts', component: FavoritecontactsComponent},
  {path: '**', redirectTo: 'allcontacts'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
