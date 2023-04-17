import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { PhoneNumberList } from 'components/PhoneList/PhoneList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { Title, SubTitle, AppStyle } from './AppStyle';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppStyle>
      <Title>PhoneBook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <FilterByName />
      <PhoneNumberList />
      <Toaster />
    </AppStyle>
  );
};
