import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const contactWithId = {
      id: nanoid(),
      ...values,
    };
    dispatch(addContact(contactWithId));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.contactForm}>
          <div className={style.inputGroup}>
            <label htmlFor="name">Name</label>
            <div className={style.inputContainer}>
              <Field
                id="name"
                name="name"
                type="text"
                className={style.inputField}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
              />
              {isNameFocused && (
                <FontAwesomeIcon icon={faLock} className={style.inputIcon} />
              )}
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className={style.errorMessage}
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="number">Number</label>
            <Field
              id="number"
              name="number"
              type="text"
              className={style.inputField}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={style.errorMessage}
            />
          </div>

          <button
            type="submit"
            className={`${style.submitButton} button`}
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
