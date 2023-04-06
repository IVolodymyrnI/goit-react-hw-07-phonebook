import { Info, List, Item } from './PhoneNumberListStyle';
import { Button } from 'components/ContactForm/ContactFormStyle';
import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { useEffect } from 'react';
import { save } from 'utils';

export function PhoneNumberList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const dispatch = useDispatch();
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
