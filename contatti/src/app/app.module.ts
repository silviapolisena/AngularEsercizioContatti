import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { AllcontactsComponent } from './features/allcontacts/allcontacts.component';
import { FavoritecontactsComponent } from './features/favoritecontacts/favoritecontacts.component';
import { ContactdetailsComponent } from './features/contactdetails/contactdetails.component';
import { OthercontactsComponent } from './features/contactdetails/othercontacts/othercontacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AllcontactsComponent,
    FavoritecontactsComponent,
    ContactdetailsComponent,
    OthercontactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
