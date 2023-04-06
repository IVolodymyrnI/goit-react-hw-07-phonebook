import { Formik } from 'formik';
import {
  Input,
  FormWindow,
  Label,
  Button,
  Error,
  InputWrapper,
} from './ContactFormStyle';
import { schema } from './ContactFormValidation';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (value, { resetForm }) => {
    dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phoneNumber: '' }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <FormWindow>
        <Label htmlFor="add-contact-name">Name</Label>
        <InputWrapper>
          <Error name="name" component="p" />
          <Input type="text" id="add-contact-name" name="name"></Input>
        </InputWrapper>
        <Label htmlFor="add-contact-number">Phone number</Label>
        <InputWrapper>
          <Error name="phoneNumber" component="p" />
          <Input type="tel" id="add-contact-number" name="phoneNumber"></Input>
        </InputWrapper>
        <Button type="submit">Add contact</Button>
      </FormWindow>
    </Formik>
  );
};
