import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Contact
} from 'src/app/model/contact';
import {
  Service
} from 'src/app/service/service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() contact: Contact;
  @Output() edit: EventEmitter < Contact > = new EventEmitter < Contact > ();
  @Output() delete: EventEmitter < Contact > = new EventEmitter < Contact > ();
  @Output() save: EventEmitter < Contact > = new EventEmitter < Contact > ();

  // Per far aprire l'edit
  opened = false;

  reactiveForm: FormGroup;
  addContactForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.contact.name, [Validators.minLength(2), Validators.required]),
      surname: new FormControl(this.contact.surname, [Validators.minLength(2), Validators.required]),
      phoneNumber: new FormControl(this.contact.phoneNumber, [Validators.minLength(10), Validators.required]),
      email: new FormControl(this.contact.email, [Validators.email, Validators.required])
    });
  }

  setFormValue() {
    this.reactiveForm.valueChanges.subscribe(reactiveForm => this.contact = reactiveForm);
    console.log(this.contact);
  }


  editContact(contact: Contact) {
    this.edit.emit(contact);
    this.opened = !this.opened;
    this.setFormValue();
  }

  deleteContact(contact: Contact) {
    this.delete.emit(contact);
  }

  saveContact(contact: Contact) {
    this.editContact(contact);
    this.save.emit(contact);
  }
}
