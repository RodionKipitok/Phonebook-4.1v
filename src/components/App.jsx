import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';

export default function App(params) {
  const data = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(data);
  const [filterContactValue, setFilterContactValue] = useState('');

  const addContact = (dataContact, funRestForm) => {
    const { name, number } = dataContact;
    const nanoid = customAlphabet('1234567890abcdef', 10);
    let id = nanoid(5);
    const newContact = {
      id,
      name,
      number,
    };
    const isContact = contacts.some(itam => {
      return name.toLowerCase() === itam.name.toLowerCase();
    });

    if (!!isContact) {
      alert(`${name} is already in contacts`);
      funRestForm();
    } else {
      setContacts(prevState => [...prevState, newContact]);
      funRestForm();
    }
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  const filterContact = () => {
    if (!filterContactValue) {
      return contacts;
    }

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterContactValue.toLowerCase());
    });
  };

  return (
    <>
      <PhonebookForm addContact={addContact} />
      <Filter
        filterInputValue={filterContactValue}
        funFilter={setFilterContactValue}
      />
      <Contacts contacts={filterContact()} funDelete={deleteContact} />
    </>
  );
}
