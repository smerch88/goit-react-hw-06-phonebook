import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { Filter } from './Phonebook/Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/contactsSlice';
import { setFilter } from 'redux/filter/filterSlice';
import { SimpleGrid } from '@mantine/core';

export const App = () => {
  const dispatch = useDispatch();

  const deleteUser = userId => {
    dispatch(removeContact(userId));
  };

  const addUser = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  const setFilterValue = data => {
    dispatch(setFilter(data));
  };

  return (
    <>
      <SimpleGrid cols={1} spacing="xl">
        <h1>Phonebook</h1>
        <ContactForm addUser={addUser} />
        <h2>Contacts</h2>
        <Filter setFilterValue={setFilterValue} />
        <ContactList deleteUser={deleteUser} />
      </SimpleGrid>
    </>
  );
};
