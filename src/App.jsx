import ContactsForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import style from './App.module.css';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from './redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.component}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
      <iframe
        id="3112900"
        allowtransparency="true"
        frameborder="0"
        style="width:100%;border:none;"
        src="//www.chess-2.com/emboard?id=3112900"
      ></iframe>
      <script>
        window.addEventListener("message",e=>
        {e['data'] &&
          '3112900' === e['data']['id'] &&
          document.getElementById(`${e['data']['id']}`) &&
          (document.getElementById(`${e['data']['id']}`).style.height =
            `${e['data']['frameHeight'] + 30}px`)}
        );
      </script>
    </div>
  );
};

export default App;
