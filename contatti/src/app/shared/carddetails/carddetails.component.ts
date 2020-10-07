import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit{
  @Input() contact: Contact;
  @Output() navigate: EventEmitter<any> = new EventEmitter<any>();

  constructor(){

  }

  ngOnInit(){

  }


  navigateTo(name){
    this.navigate.emit(name);
  }


}
