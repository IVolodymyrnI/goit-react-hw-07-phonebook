import { useFormik } from 'formik';
import {
  Input,
  FormWindow,
  Label,
  Button,
  Error,
  InputWrapper,
} from './ContactFormStyle';
import { schema } from './ContactFormValidation';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectError } from 'redux/selectors';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
    },
    validationSchema: schema,
    onSubmit: async values => {
      const response = await dispatch(addContact(values));

      if (response.payload) {
        formik.resetForm();
      }
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <FormWindow onSubmit={formik.handleSubmit}>
      <Label htmlFor="add-contact-name">Name</Label>
      <InputWrapper>
        {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
        <Input
          type="text"
          id="add-contact-name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></Input>
      </InputWrapper>
      <Label htmlFor="add-contact-number">Phone number</Label>
      <InputWrapper>
        {formik.errors.phoneNumber ? (
          <Error>{formik.errors.phoneNumber}</Error>
        ) : null}
        <Input
          type="tel"
          id="add-contact-number"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        ></Input>
      </InputWrapper>
      <Button type="submit">Add contact</Button>
    </FormWindow>
  );
};
