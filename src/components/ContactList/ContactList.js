import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';

import css from './ComtactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const query = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={css.contact__container}>
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
