import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/contactForm';
import ContactsFilter from 'components/contactsFilter';
import ContactList from 'components/contactList';
import { fetchContacts } from 'redux/contacts/operation';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <ContactsFilter />
      <ContactList />
    </>
  );
};

export default Contacts;
