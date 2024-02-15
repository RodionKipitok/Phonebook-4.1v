import '../Filter/filter.css';

export default function Filter({ filterInputValue, funFilter }) {
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => funFilter(e.target.value)}
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
