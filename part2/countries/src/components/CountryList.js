const CList = ({ countries, setResults }) => {
  return (
    <>
      {countries.map((c, i) => (
        <div key={c.ccn3}>
          {c.name.common + ' '}
          <button onClick={() => setResults([countries[i]])}>show</button>
        </div>
      ))}
    </>
  );
};

export default CList;
