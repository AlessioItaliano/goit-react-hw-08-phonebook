import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, updateContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';

import { Form, FormLabel, FormInput, FormBtn } from './UpdateForm.styled';

const UpdateForm = ({ onCloseModal, contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [userName, setUserName] = useState(() => contact.name);
  const [userNumber, setUserNumber] = useState(() => contact.number);

  const onSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(({ name }) => name.toLowerCase() === userName.toLowerCase())
    ) {
      return Notiflix.Notify.failure(`${userName} is already in contacts`);
    }

    const updatedContact = {
      contactId: contact.id,
      name: userName,
      number: userNumber,
    };

    dispatch(updateContact(updatedContact))
      .then(() => {
        dispatch(fetchContacts());
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong, please try again');
      });

    setUserName('');
    setUserNumber('');
    onCloseModal();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLabel>Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <FormLabel>Number</FormLabel>
      <FormInput
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={userNumber}
        onChange={e => setUserNumber(e.target.value)}
      />
      <FormBtn type="submit">Update contact</FormBtn>
    </Form>
  );
};

export default UpdateForm;
