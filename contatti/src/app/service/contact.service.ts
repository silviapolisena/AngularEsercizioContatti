import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  active: Contact;

  constructor(private http: HttpClient) { 
   
  }

  setActive(contact: Contact){
    this.active= contact;
  }

  getAll(){
  this.http.get<Contact[]>('http://localhost:3000/contacts')
     .subscribe(result => {
      this.contacts = result;
     });
    }

  delete(contact: Contact){
   this.http.delete(`http://localhost:3000/contacts/${contact.id}`)
   .subscribe(() =>{
     const index = this.contacts.findIndex(c => c.id === contact.id);
     this.contacts.splice(index, 1);
   });
  }

  add(contact: Contact){
    this.http.post<Contact>(`http://localhost:3000/contacts/`, contact)
    .subscribe(result => {
      this.contacts.push(result);
    });
  }

  saveEdit(contact: Contact){
   this.http.patch<Contact>(`http://localhost:3000/contacts/${this.active.id}`, contact)
      .subscribe(result => {
        const index = this.contacts.findIndex(c => c.id === this.active.id);
        this.contacts[index] = result;
      });
    }

   /* save(contact: Contact){
     this.edit(contact);
    }*/
}
