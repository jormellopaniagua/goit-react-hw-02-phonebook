// ContactList.jsx
import React from 'react';
import ListStyled from './styledComponents/ListStyled';
import ContactStyled from './styledComponents/ContactStyled';
import Button from './styledComponents/Button';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ListStyled>
        {contacts.map(contact => (
          <ContactStyled key={contact.id}>
            {contact.name} - {contact.number}
            <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
          </ContactStyled>
        ))}
      </ListStyled>
    </div>
  );
};

export default ContactList;
