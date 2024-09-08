import PropTypes from 'prop-types';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={style.contact}>
      <div className={style.info}>
        <div className={style.iconText}>
          <FontAwesomeIcon icon={faUser} className={style.icon} />
          <span className={style.name}>{contact.name}</span>
        </div>
        <div className={style.iconText}>
          <FontAwesomeIcon icon={faPhone} className={style.icon} />
          <span className={style.number}>{contact.number}</span>
        </div>
      </div>
      <button
        className={`${style.deleteButton} button`}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
