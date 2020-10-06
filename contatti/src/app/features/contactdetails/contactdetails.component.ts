import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { Service } from 'src/app/service/service';


@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent  {

// Id
contactdetailsid: number;

contacts: Contact[] = [];

// Recuperare l'id del contatto cliccato!
constructor(private service: Service,
  activatedRoute : ActivatedRoute){
  // + per traformare una stringa in un number
  this.contactdetailsid = +activatedRoute.snapshot.params['id'];
  this.contacts = this.service.getContacts();
}



navigate(name){
 debugger;
  switch(name){
    case 'facebook': location.href='https://it-it.facebook.com/';
    break;
    case 'instagram': location.href='https://www.instagram.com';
    break;
    case 'twitter': location.href='https://twitter.com';
    break;
  }
  return;
  }

}
