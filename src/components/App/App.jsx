import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app__container}>
      <h1 className={css.app__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.app__subTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
