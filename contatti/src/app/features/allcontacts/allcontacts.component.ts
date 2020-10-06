import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent {

  contacts: Contact[] = [];

  constructor(private service: Service){
    this.contacts = this.service.getContacts();
  }

}


