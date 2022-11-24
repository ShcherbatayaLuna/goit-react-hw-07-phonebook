import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/utils/ContactsApi';
import { selectContacts } from 'redux/selectors/Selectors';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, TitlePrimary, TitleSecondary } from './App.styled';

export default function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm />
      {contacts && (
        <>
          <TitleSecondary>Contacts</TitleSecondary>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
}
