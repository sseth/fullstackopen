import axios from 'axios';
import { useEffect, useState } from 'react';
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
    persons.forEach((person) => {
      if (name === person.name) {
        duplicate = true;
        return;
      }
    });

    if (!duplicate) {
      setPersons(persons.concat({ name, number }));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${name} is already in phonebook`);
    }
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
    axios('http://localhost:3001/persons')
    .then((response) => {
      setPersons(response.data);
    });
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
      <Numbers persons={filtered} />
    </div>
  );
};

export default App;
