import { useState, useEffect } from 'react';
import { customAlphabet } from 'nanoid';
import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';

export default function App(params) {
  const [contacts, setContacts] = useState(showLocalStorageContacts());
  const [filterState, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  function showLocalStorageContacts() {
    const contacts = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contacts);

    if (parsedContact === null) {
      return [];
    }

    return parsedContact;
  }

  const saveNewContact = ({ name, number }) => {
    const nanoid = customAlphabet('1234567890abcdef', 10);
    let id = nanoid(5);
    const newContact = {
      id,
      name,
      number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  const onFilterName = evt => {
    if (contacts.lenght < 0) {
      return;
    }
    const filterInputValue = filterState;
    const filterName = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterInputValue.toLowerCase());
    });

    console.log(contacts);

    return filterName;
  };

  return (
    <>
      <PhonebookForm state={contacts} onSubmit={saveNewContact} />
      <Filter state={filterState} onChange={handleChange} />
      <Contacts data={onFilterName()} deleteContacts={deleteContact} />
    </>
  );
}
