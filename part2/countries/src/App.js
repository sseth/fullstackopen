import axios from 'axios';
import { useState, useEffect } from 'react';
import { Filter, Results } from './components';

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios('https://restcountries.com/v3.1/all').then((response) =>
      setData(response.data)
    );
  }, []);

  useEffect(() => {
    if (query === '') {
      setFiltered([]);
      return;
    }

    setFiltered(
      data.filter((c) =>
        c.name.common.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, data]);

  return (
    <div>
      <Filter query={query} setQuery={setQuery} />
      <Results query={query} countries={filtered} setResults={setFiltered} />
    </div>
  );
};

export default App;
