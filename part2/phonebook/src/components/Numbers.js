import phonebookService from '../services/phonebook';

const Numbers = ({ persons, setPersons }) => {
  const deletePerson = (id, name) => {
    if (!window.confirm(`Delete ${name}?`)) return;
    phonebookService
      .remove(id)
      .then(() => setPersons(persons.filter((p) => p.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <>
      {persons.map((p) => (
        <div key={p.name}>
          {p.name}: {p.number}{' '}
          <button onClick={() => deletePerson(p.id, p.name)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Numbers;
