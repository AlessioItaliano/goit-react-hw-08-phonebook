import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';
import { selectContactsFilter } from 'redux/contacts/selectors';

import {
  ContactsFilterForm,
  ContactsFilterLabel,
  ContactsFilterInput,
} from './ContactsFilter.styled';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const filterContacts = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilterContacts(normalizedValue));
  };

  return (
    <ContactsFilterForm>
      <ContactsFilterLabel>Find contact by name</ContactsFilterLabel>
      <ContactsFilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={filterContacts}
      />
    </ContactsFilterForm>
  );
};

export default ContactsFilter;
