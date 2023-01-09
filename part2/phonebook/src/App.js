import { useEffect, useState } from 'react';
import pbService from './services/phonebook';
import { AddPerson, Filter, Numbers } from './components';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const addName = (e) => {
    e.preventDefault();

    const name = newName.trim();
    const number = newNumber.trim();
    if (!name || !number) {
      alert('Name and number required');
      return;
    }

    let duplicate = false;
    let id;
    persons.forEach((person) => {
      if (name === person.name) {
        duplicate = true;
        id = person.id;
        return;
      }
    });

    if (!duplicate) {
      pbService
        .create({ name, number })
        .then((newEntry) => setPersons(persons.concat(newEntry)))
        .catch((error) => console.error(error));
    } else {
      const msg = `${name} is already in phonebook, replace old number?`;
      if (!window.confirm(msg)) return;
      pbService
        .update(id, newNumber)
        .then(() => {
          pbService.getAll().then((persons) => setPersons(persons));
        })
        .catch((error) => console.error(error));
    }
    setNewName('');
    setNewNumber('');
  };

  const handleChange = (e) => {
    if (e.target.name === 'name') setNewName(e.target.value);
    else setNewNumber(e.target.value);
  };

  useEffect(() => {
    if (search === '') {
      setFiltered(persons);
    } else {
      setFiltered(
        persons.filter((person) =>
          person.name
            .split(' ')
            .some((str) => str.toLowerCase().startsWith(search.toLowerCase()))
        )
      );
    }
  }, [search, persons]);

  useEffect(() => {
    pbService
      .getAll()
      .then((allEntries) => setPersons(allEntries))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} setSearch={setSearch} />

      <h4 style={{ marginBottom: 5 }}>Add new</h4>
      <AddPerson
        name={newName}
        number={newNumber}
        onSubmit={addName}
        onChange={handleChange}
      />

      <h4 style={{ marginBottom: 5 }}>Numbers</h4>
      <Numbers persons={filtered} setPersons={setPersons} />
    </div>
  );
};

export default App;
