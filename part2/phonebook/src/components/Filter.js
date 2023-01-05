const Filter = ({ search, setSearch }) => (
  <div>
    <span>filter by name </span>
    <input value={search} onChange={(e) => setSearch(e.target.value)} />
    <button onClick={() => setSearch('')}>clear</button>
  </div>
);

export default Filter;
