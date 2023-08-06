import PropTypes from 'prop-types';
import { ContactItem } from 'components/contactItem/ContactItem';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors';

export const ContactList = ({ contacts, deleteContact }) => {
  const { isLoading, error, items } = useSelector(selectContacts);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {items && (
        <ul className={css.list}>
          {contacts.map(item => (
            <li className={css.listItem} key={item.id}>
              <ContactItem
                name={item.name}
                id={item.id}
                number={item.number}
                deleteContact={deleteContact}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};
