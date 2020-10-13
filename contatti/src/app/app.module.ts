import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { AllcontactsComponent } from './features/allcontacts/allcontacts.component';
import { FavoritecontactsComponent } from './features/favoritecontacts/favoritecontacts.component';
import { ContactdetailsComponent } from './features/contactdetails/contactdetails.component';
import { CarddetailsComponent } from './shared/carddetails/carddetails.component';
import { Service } from './service/service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AllcontactsComponent,
    FavoritecontactsComponent,
    ContactdetailsComponent,
    CarddetailsComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
