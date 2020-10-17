import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 @Output() add: EventEmitter<Contact> = new EventEmitter();

  addContactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addContactForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      surname: new FormControl('', [Validators.minLength(2), Validators.required]),
      phoneNumber: new FormControl('', [Validators.minLength(10), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      birthDate: new FormControl('', [Validators.minLength(10), Validators.required]),
      favorite: new FormControl()
    });
  }

  submit(addContactForm: FormGroup){
    this.add.emit(addContactForm.value);
    addContactForm.reset();
  }
}
