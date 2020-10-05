import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/model/contact';


@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent  {

// Id
contactdetailsid: number;

contacts: Contact[] = [
  {id: 1, name: 'Silvia', surname: 'Polisena', phoneNumber: '3408046768',
  birthDate: '11/05/1994', favorite: false},
  {id: 2, name: 'Cristian', surname: 'Ababii', phoneNumber: '3427588317',
  birthDate: '1995', favorite: true},
  {id: 3, name: 'Justin', surname: 'Bieber', phoneNumber: '0987866555',
  birthDate: '1/03/1994', favorite: true},
  {id: 4, name: 'Giorgia', surname: 'Roma', phoneNumber: '3349087890',
  birthDate: '17/09/1992 ', favorite: false},
  {id: 5, name: 'Marco', surname: 'Venezia', phoneNumber: '3289876541',
  birthDate: '23/04/1989', favorite: false}
]

// Recuperare l'id del contatto cliccato!
constructor(activatedRoute : ActivatedRoute){
  // + per traformare una stringa in un number
  this.contactdetailsid = +activatedRoute.snapshot.params['id'];
}

}
