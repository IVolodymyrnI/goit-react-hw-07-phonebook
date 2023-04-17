import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

import { schema } from './ContactFormValidation';
import { addContact } from 'redux/operations';
import { selectError, selectIsPending } from 'redux/selectors';
import {
  Input,
  FormWindow,
  Label,
  Button,
  Error,
  InputWrapper,
} from './ContactFormStyle';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isPending = useSelector(selectIsPending);
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
        toast.success('The contact is added successfully!');
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
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Adding...' : 'Add contact'}
      </Button>
    </FormWindow>
  );
};
