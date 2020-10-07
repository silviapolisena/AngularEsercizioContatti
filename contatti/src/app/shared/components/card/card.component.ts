import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title: string;
@Input() contact: Contact;
@Output() edit: EventEmitter<Contact> = new EventEmitter<Contact>();
@Output() delete: EventEmitter<Contact> = new EventEmitter<Contact>();
@Output() save: EventEmitter<Contact> = new EventEmitter<Contact>();

// Per far aprire l'edit
opened = false;

reactiveForm: FormGroup;

constructor(){

}

ngOnInit(){
  this.createForm();

}

createForm(){
   this.reactiveForm = new FormGroup({
    name: new FormControl(this.contact.name),
    surname: new FormControl(this.contact.surname),
    phoneNumber: new FormControl(this.contact.phoneNumber),
  });
}

setFormValue(){
  this.reactiveForm.valueChanges.subscribe(reactiveForm => this.contact = reactiveForm);
  console.log(this.contact);
} 


editContact(contact: Contact){
  this.edit.emit(contact);
  this.opened = !this.opened;
  this.setFormValue();
}

deleteContact(contact: Contact){
  this.delete.emit(contact);
}

saveContact(contact: Contact){
  this.editContact(contact);
  this.save.emit(contact);
}
}
