export const checkOnUniqueName = ({ array, value }) => {
  const arrayOfNames = array.map(contact => contact.name.toLowerCase());
  const index = arrayOfNames.indexOf(value.toLowerCase());

  return !Boolean(index === -1);
};
