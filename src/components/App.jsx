import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    KEY: 'contacts',
  };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };
  addContact = data => {
    data.id = nanoid();
    const { contacts } = this.state;
    const checkContact = contacts.find(contact => contact.name === data.name);
    checkContact
      ? alert(`${data.name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };
  componentDidMount() {
    const data = localStorage.getItem(this.state.KEY);
    const contacts = JSON.parse(data);
    if (data !== null) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(this.state.KEY, JSON.stringify(this.state.contacts));
    }
  }
  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => idContact !== contact.id),
    }));
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const filteredContacts = this.filterContacts();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter}></Filter>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
