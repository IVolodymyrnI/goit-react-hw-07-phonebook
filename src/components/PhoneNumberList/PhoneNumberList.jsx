import { Info, List, Item } from './PhoneNumberListStyle';
import { Button } from 'components/ContactForm/ContactFormStyle';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsPending, selectVisiableContacts } from 'redux/selectors';

export function PhoneNumberList() {
  const visibleContacts = useSelector(selectVisiableContacts);
  const isPending = useSelector(selectIsPending);
  const dispatch = useDispatch();

  return (
    <>
      {isPending && <div>Loading...</div>}
      <List>
        {visibleContacts.map(({ id, name, phoneNumber }) => {
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
    </>
  );
}
