import { Component } from 'react';
import { ContactFilter } from './Contacts/ContactFilter/ContactFilter';
import {} from '';
import {} from '';
import {} from '';
import {} from '';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Van DarkHolme', number: '459-12-56' },
      { id: 'id-2', name: 'Johnson Lebovski', number: '443-89-12' },
      { id: 'id-3', name: 'Billy Herrington', number: '645-17-79' },
      { id: 'id-4', name: 'Gena Ciderusni', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContacts = (newContact, { action }) => {
    const { contacts } = this.state;

    const duplicateName = contacts.map(el => el.name.toLowerCase());

    return duplicateName.includes(newContact.name.toLowerCase())
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(prevState => {
          action.resetForm();
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };
}
