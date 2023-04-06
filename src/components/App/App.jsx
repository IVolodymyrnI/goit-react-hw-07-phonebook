import { ContactForm } from 'components/ContactForm/ContactForm';
import { PhoneNumberList } from 'components/PhoneNumberList/PhoneNumberList';
import { FilterByName } from 'components/FilterByName/FilterByName';
import { Title, SubTitle, AppStyle } from './AppStyle';

export const App = () => {
  return (
    <AppStyle>
      <Title>PhoneBook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <FilterByName />
      <PhoneNumberList />
    </AppStyle>
  );
};