import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';
class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  phoneId = nanoid();

  onHandleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id={this.nameId}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.onHandleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            id={this.phoneId}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.onHandleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
