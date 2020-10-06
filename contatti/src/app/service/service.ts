import { Contact } from '../model/contact';

export class Service{
    
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

    getContacts(){
        return this.contacts;
    }

}