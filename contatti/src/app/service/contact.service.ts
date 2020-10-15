import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  constructor(private http: HttpClient) { 
   
  }

  getAll(){
  this.http.get<Contact[]>('http://localhost:3000/contacts')
     .subscribe(result => {
      this.contacts = result;
     })
    }

  delete(contact: Contact){
   this.http.delete(`http://localhost:3000/contacts/${contact.id}`)
   .subscribe(() =>{
     const index = this.contacts.findIndex(c => c.id === contact.id);
     this.contacts.splice(index, 1);
   })
  }
}
