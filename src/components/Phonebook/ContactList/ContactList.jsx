import PropTypes from 'prop-types';
import { Button } from '@mantine/core';
import { useSelector } from 'react-redux';

export const ContactList = ({ deleteUser }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter.filter);

  return (
    <>
      <ul>
        {contacts
          .filter(contact =>
            contact.name
              .trim()
              .toLowerCase()
              .includes(filterValue.trim().toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <Button onClick={() => deleteUser(contact.id)}>Delete</Button>
            </li>
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
