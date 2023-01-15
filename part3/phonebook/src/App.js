import { useEffect, useState } from 'react';
import pbService from './services/phonebook';
import { AddPerson, Filter, Numbers, MsgPopup } from './components';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [notif, setNotif] = useState(['', false]);

  const getPersons = () => {
    pbService
      .getAll()
      .then((allEntries) => setPersons(allEntries))
      .catch((error) => {
        console.error(error);
        setNotif(['Could not fetch phonebook entries', true]);
      });
  };

  const search = () => {
    if (query === '') {
      setSearchResults(persons);
    } else {
      setSearchResults(
        persons.filter((person) =>
          person.name
            .split(' ')
            .some((str) => str.toLowerCase().startsWith(query.toLowerCase()))
        )
      );
    }
  };

  const clearNotif = () => {
    if (notif[0] === '') return;
    setTimeout(() => setNotif(['', false]), 5000);
  };

  useEffect(getPersons, []);
  useEffect(clearNotif, [notif]);
  useEffect(search, [query, persons]);

  return (
    <div style={{ width: 400 }}>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>

      <MsgPopup notif={notif} />
      <Filter query={query} setQuery={setQuery} />

      <h3 style={{ marginBottom: 4 }}>Add new</h3>
      <AddPerson
        persons={persons}
        setNotif={setNotif}
        setPersons={setPersons}
      />

      <h3 style={{ marginBottom: 8 }}>Numbers</h3>
      <Numbers
        persons={persons}
        setNotif={setNotif}
        setPersons={setPersons}
        filtered={searchResults}
      />
    </div>
  );
};

export default App;
