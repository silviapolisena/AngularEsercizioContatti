import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent {


contacts: Contact[] = [
   {id: 1, name: 'Silvia', surname: 'Polisena', phoneNumber: '3408046768',
   birthdate: '11/05/1994', favorite: false},
   {id: 2, name: 'Cristian', surname: 'Ababii', phoneNumber: '3427588317',
   birthdate: '1995', favorite: true},
   {id: 3, name: 'Justin', surname: 'Bieber', phoneNumber: '0987866555',
   birthdate: '1/03/1994', favorite: true},
   {id: 4, name: 'Giorgia', surname: 'Roma', phoneNumber: '3349087890',
   birthdate: '17/09/1992 ', favorite: false},
   {id: 5, name: 'Marco', surname: 'Venezia', phoneNumber: '3289876541',
   birthdate: '23/04/1989', favorite: false}]

active: Contact;

setActive(contact: Contact){
  this.active = contact;
  console.log('active');
}
}
