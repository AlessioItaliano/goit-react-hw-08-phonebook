import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from 'components/modal';
import UpdateForm from 'components/updateForm';
import { fetchContacts, deleteContact } from 'redux/contacts/operation';
import Loader from 'components/loader';

import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import {
  ContactListUl,
  ContactItem,
  ContactButton,
  Title,
  ButtonsBox,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  const handleOpenUpdateModal = contact => {
    setSelectedContact(contact);
    toggleModal();
  };

  return (
    <ContactListUl>
      {isLoading && !error ? (
        <Loader />
      ) : contacts.length === 0 && !error ? (
        <Title>Your contact book is empty</Title>
      ) : (
        <>
          {contacts.map(contact => (
            <ContactItem key={contact.id}>
              {contact.name}: {contact.number}
              <ButtonsBox>
                <ContactButton
                  type="button"
                  onClick={handleDelete}
                  id={contact.id}
                >
                  Delete
                </ContactButton>
                <ContactButton
                  type="button"
                  onClick={() => handleOpenUpdateModal(contact)}
                  id={contact.id}
                >
                  Edit
                </ContactButton>
              </ButtonsBox>
            </ContactItem>
          ))}
          {isShowModal && (
            <Modal
              children={
                <>
                  <Title>Update your contact</Title>
                  <UpdateForm
                    onCloseModal={toggleModal}
                    contact={selectedContact}
                  />
                </>
              }
              onCloseModal={toggleModal}
            />
          )}
        </>
      )}
    </ContactListUl>
  );
};

export default ContactList;
