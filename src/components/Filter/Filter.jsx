import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors/Selectors';
import { filterContact } from 'redux/createSlice/ContactsSlice';
import { Box, Label, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <Box>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </Box>
  );
}
