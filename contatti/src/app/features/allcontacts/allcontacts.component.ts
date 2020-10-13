import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { Service } from 'src/app/service/service';
import { LoginComponent } from '../login/login.component';

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

edit(contact: Contact){
  console.log('edit');
 //const index = this.contacts.findIndex(c => c.id === contact.id);
 //this.contacts[index] = contact;
 
}

delete(contact: Contact){
  console.log('delete', contact);
  const index = this.contacts.indexOf(contact);
  this.contacts.splice(index, 1);
}

save(contact: Contact){
  console.log('save', contact);
  /*const index = this.contacts.findIndex(c => c.id === contact.id);
  this.contacts[index] = contact;*/
}
}


