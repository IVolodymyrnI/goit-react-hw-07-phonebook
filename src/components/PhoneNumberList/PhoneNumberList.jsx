import { List } from './PhoneNumberListStyle';
import { PhoneNumberListItem } from 'components/PhoneListItem/PhoneListItem';
import { useFetchContactsQuery } from 'redux/operations';

export function PhoneNumberList() {
  const { data, isFetching } = useFetchContactsQuery();
  const showContactList = !isFetching && data;

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {showContactList && (
        <List>
          {data.map(({ id, name, phoneNumber }) => (
            <PhoneNumberListItem
              key={id}
              id={id}
              name={name}
              phoneNumber={phoneNumber}
            />
          ))}
        </List>
      )}
    </>
  );
}
