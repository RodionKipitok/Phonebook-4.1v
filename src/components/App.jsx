import { useState, useEffect } from 'react';
import { customAlphabet } from 'nanoid';
import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';

export default function App(params) {
  const [contacts, setContacts] = useState(showLocalStorageContacts());
  const [filterContactValue, setFilterContactValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function showLocalStorageContacts() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (contacts === null) {
      return [];
    }
    return parsedContacts;
  }

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
      <PhonebookForm funcaddContact={addContact} />
      <Filter
        filterInputValue={filterContactValue}
        funcFilter={setFilterContactValue}
      />
      <Contacts contacts={filterContact()} funcDelete={deleteContact} />
    </>
  );
}
