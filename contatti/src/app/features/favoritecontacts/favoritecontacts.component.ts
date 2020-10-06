import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-favoritecontacts',
  templateUrl: './favoritecontacts.component.html',
  styleUrls: ['./favoritecontacts.component.css']
})
export class FavoritecontactsComponent{

  contacts: Contact[] = [];

  constructor(private service: Service){
    this.contacts = this.service.getContacts();
  }
}
