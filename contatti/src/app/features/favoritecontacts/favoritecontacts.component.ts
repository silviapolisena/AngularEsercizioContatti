import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-favoritecontacts',
  templateUrl: './favoritecontacts.component.html',
  styleUrls: ['./favoritecontacts.component.css']
})
export class FavoritecontactsComponent{

  contacts: Contact[] = [];

  constructor(public contactService: ContactService
    /*private service: Service*/){
    //this.contacts = this.service.getContacts();
  }
}
