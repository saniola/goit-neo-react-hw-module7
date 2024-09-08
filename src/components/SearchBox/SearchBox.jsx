import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import style from './SearcBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </>
  );
};

export default SearchBox;
