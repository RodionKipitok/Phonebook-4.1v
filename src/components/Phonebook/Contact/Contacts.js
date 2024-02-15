import '../Contact/contact.css';

export default function Contacts({ contacts, funDelete }) {
  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {contacts.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                funDelete(contact.id);
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
