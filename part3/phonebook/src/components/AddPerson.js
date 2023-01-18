import { useState } from 'react';
import pbService from '../services/phonebook';

const AddPerson = ({ persons, setPersons, setNotif }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
      if (name.toLowerCase() === person.name.toLowerCase()) {
        duplicate = true;
        id = person.id;
        return;
      }
    });

    if (!duplicate) {
      pbService
        .create({ name, number })
        .then((newEntry) => {
          setNotif([`Added ${name}`, false]);
          setPersons(persons.concat(newEntry));
        })
        .catch((error) => {
          console.error(error);
          setNotif([`Failed to add ${name}`, true]);
        });
    } else {
      const msg = `${name} is already in phonebook, replace old number?`;
      if (!window.confirm(msg)) return;
      pbService
        .update(id, name, newNumber)
        .then(() =>
          pbService.getAll().then((persons) => {
            setPersons(persons);
            setNotif([`Updated ${name}`, false]);
          })
        )
        .catch((error) => {
          console.error(error);
          const msg =
            error.response && error.response.status === 404
              ? `${name} already deleted from server`
              : `Failed to update ${name}`;
          setNotif([msg, true]);
        });
    }
    setNewName('');
    setNewNumber('');
  };

  const update = (e) => {
    if (e.target.name === 'name') setNewName(e.target.value);
    else setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={addName}>
      <table style={{ width: '300px' }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input name="name" value={newName} onChange={update} />
            </td>
          </tr>
          <tr>
            <td>Number</td>
            <td>
              <input name="number" value={newNumber} onChange={update} />
            </td>
          </tr>
          <tr style={{ height: 35 }}>
            <td
              colSpan={2}
              style={{ textAlign: 'center', verticalAlign: 'bottom' }}
            >
              <button type="submit">add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default AddPerson;
