import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, filterContact } from 'redux/ContactsSlice';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, TitlePrimary, TitleSecondary } from './App.styled';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const formSubmitHandler = ({ name, number }) => {
    const todo = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(todo));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm onSubmit={formSubmitHandler} />

      <TitleSecondary>Contacts</TitleSecondary>
      <Filter
        filter={filter}
        onChange={event => dispatch(filterContact(event.target.value))}
      />
      <ContactList
        contacts={getVisibleContacts()}
        deleteContact={event => dispatch(deleteContact(event))}
      />
    </Container>
  );
}
