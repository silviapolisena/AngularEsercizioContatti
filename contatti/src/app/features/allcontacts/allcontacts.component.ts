import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
//import { Service } from 'src/app/service/service';


@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent implements OnInit{

   contacts: Contact[] = [];

   /* Quando nel template accediamo ad una indipendenza iniettata la dipendenza deve
   essere dichiarata public */
  constructor(public contactService: ContactService
    /*private service: Service*/){
    //this.contacts = this.service.getContacts();
    // Chiamata GET
    contactService.getAll();
  }

   ngOnInit(){
   
  }
   
  /* delete(contact: Contact){
    console.log('delete', contact);
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  } */


edit(contact: Contact){
  console.log('edit');
 //const index = this.contacts.findIndex(c => c.id === contact.id);
 //this.contacts[index] = contact;
 
}



save(contact: Contact){
  console.log('save', contact);
  /*const index = this.contacts.findIndex(c => c.id === contact.id);
  this.contacts[index] = contact;*/
}
}


