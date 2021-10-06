import React from 'react';

import './App.css';
import ContactsList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Forms/Form';

function App() {
  return (
    <div className="container">
      <div className="formsContainer">
        <Form />
      </div>

      <div className="contactsContainer">
        <div className="contacts">
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </div>
  );
}

export default App;

// componentDidMount() {
//   console.log('App componentDidMount');

//   const contacts = localStorage.getItem('Contacts');
//   const parsedContacts = JSON.parse(contacts);
//   console.log(parsedContacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log('App componentDidUpdate');
//   if (this.state.contacts !== prevState.contacts) {
//     console.log('Обновился список контактов');

//     localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
//   }
// }
