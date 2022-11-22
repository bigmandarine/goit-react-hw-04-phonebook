import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    data.id = nanoid();
    const checkContact = contacts.find(contact => contact.name === data.name);
    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : setContacts([...contacts, data]);
  };

  useEffect(() => {
    const data = localStorage.getItem('contacts');
    const parsedcContacts = JSON.parse(data);
    setContacts(parsedcContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onDeleteContact = idContact => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => idContact !== contact.id)
    );
  };
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={onChangeFilter}></Filter>
      <ContactList
        contacts={filterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
