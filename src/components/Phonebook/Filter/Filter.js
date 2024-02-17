import '../Filter/filter.css';

export default function Filter({ filterInputValue, funcFilter }) {
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => funcFilter(e.target.value)}
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
        "
        required
        value={filterInputValue}
      />
    </>
  );
}
