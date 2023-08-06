import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import './contactsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from 'store/contacts/thunk';
import { selectContacts, selectFilter } from 'store/selectors';
import { Context } from 'components/App';
import { useEffect } from 'react';
import { selectIsAuth } from 'store/auth/selector';
import { useNavigate } from 'react-router-dom';

export const ContactPage = () => {
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  useEffect(() => {
    isAuth ? dispatch(getContactsThunk()) : navigate('/login');
  }, [isAuth, navigate, dispatch]);

  function getFiltered() {
    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  }

  const filteredContacts = getFiltered();

  return (
    <>
      <Context.Provider value={deleteContact}>
        <div className="bg">
          <div className='bgi'/>
          <ContactForm />
          <div className="container">
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </div>
        </div>
      </Context.Provider>
    </>
  );
};
