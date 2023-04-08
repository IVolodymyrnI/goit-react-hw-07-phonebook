import { Info, List, Item } from './PhoneNumberListStyle';
import { Button } from 'components/ContactForm/ContactFormStyle';
import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import { getFilterValue } from 'redux/filterSlice';

export function PhoneNumberList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, phoneNumber }) => {
        return (
          <Item key={id}>
            <Info>
              {name}: {phoneNumber}
            </Info>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}
