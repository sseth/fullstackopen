const Filter = ({ query, setQuery }) => {
  return (
    <div>
      <span>find countries </span>
      <input
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      &nbsp;
      <button onClick={() => setQuery('')}>clear</button>
    </div>
  );
};

export default Filter;
