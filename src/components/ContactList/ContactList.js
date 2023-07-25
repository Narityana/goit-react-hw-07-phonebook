import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectFiltredContacts,
} from 'redux/selectors';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ComtactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contact__container}>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Oops! Something went wrong. Please try again later.</b>}
      <ul className={css.contact__list}>
        {filteredContacts.map(contact => (
          <ContactListItem
            contact={contact}
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
