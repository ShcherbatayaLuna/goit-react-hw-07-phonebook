import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors/Selectors';
import { deleteContact } from 'redux/utils/ContactsApi';
import { List, ListItem, Text, Button } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const lowercaseContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = lowercaseContacts();

  return (
    <List>
      {filterContacts?.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <Text>
            <b>{name}:</b> {phone}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
