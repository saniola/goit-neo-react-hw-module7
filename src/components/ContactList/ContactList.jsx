import Contact from '../Contact/Contact.jsx';
import { selectFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
