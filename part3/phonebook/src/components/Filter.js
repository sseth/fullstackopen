const Filter = ({ query, setQuery }) => {
  return (
    <div
      style={{
        paddingLeft: 3,
        marginBottom: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span>Filter by name</span>
      <input
        value={query}
        style={{ width: '60%' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setQuery('')}>clear</button>
    </div>
  );
};

export default Filter;
