// App.jsx
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Page from './styledComponents/Page';

export const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  });

  const { contacts, filter } = state;

  const addContact = newContact => {
    const contactExists = contacts.some(
      contact => contact.name === newContact.name
    );
    if (contactExists) {
      alert(
        'Contact name already exists in the phonebook. Please choose a different name.'
      );
      return;
    }
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const handleFilterChange = e => {
    setState(prevState => ({
      ...prevState,
      filter: e.target.value,
    }));
  };

  const deleteContact = id => {
    setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Page>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <div>
        <h2>Contacts</h2>

        <Filter filter={filter} onChange={handleFilterChange} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </Page>
  );
};
