import { ContactForm } from 'components/ContactForm/ContactForm';
import { PhoneNumberList } from 'components/PhoneNumberList/PhoneNumberList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { Title, SubTitle, AppStyle } from './AppStyle';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Toaster } from 'react-hot-toast';

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
