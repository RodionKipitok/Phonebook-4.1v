import '../Contact/contact.css';

export default function Contacts({ data, deleteContacts }) {
  const idTransfer = id => {
    deleteContacts(id);
  };

  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {data.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                idTransfer(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
