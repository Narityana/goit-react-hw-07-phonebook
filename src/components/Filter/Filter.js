import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const query = event.target.value;
    dispatch(setFilter(query));
  };

  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          onChange={handleChange}
        ></input>
      </label>
    </>
  );
};

export default Filter;
