import { Formik, Form } from 'formik';
import { Label, Input } from 'components/ContactForm/ContactFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { setFilter } from 'redux/filterSlice';

export function FilterByName() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const onChange = ({ currentTarget: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Formik initialValues={{ findName: '' }}>
      <Form>
        <Label htmlFor="name-contact-filter">Find contacts by name</Label>
        <Input
          type="text"
          id="name-contact-filter"
          name="findName"
          value={filter}
          onChange={onChange}
        ></Input>
      </Form>
    </Formik>
  );
}
