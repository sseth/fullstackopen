import { CInfo, CList } from '.';

const Results = ({ query, countries, setResults }) => {
  const getResults = () => {
    const i = countries.findIndex(
      (c) => query.toLowerCase() === c.name.common.toLowerCase()
    );

    if (i !== -1) {
      return <CInfo country={countries[i]} />;
    } else if (countries.length === 1) {
      return <CInfo country={countries[0]} />;
    } else {
      return <CList countries={countries} setResults={setResults} />;
    }
  };

  return (
    <div>
      {countries.length > 10
        ? 'Too many matches, specify another filter'
        : getResults()}
    </div>
  );
};

export default Results;
