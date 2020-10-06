import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
@Input() title: string;
@Input() contact: Contact;


reactiveForm: FormGroup;

constructor(){
  this.reactiveForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
}
}
