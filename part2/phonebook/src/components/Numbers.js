import pbService from '../services/phonebook';

const Numbers = ({ persons, setPersons, setNotif }) => {
  // console.log('numbers');
  const deletePerson = (id, name) => {
    if (!window.confirm(`Delete ${name}?`)) return;
    pbService
      .remove(id)
      .then(() => {
        setPersons(persons.filter((p) => p.id !== id));
        setNotif([`Deleted ${name}`], false);
      })
      .catch((error) => {
        console.error(error);
        const msg =
          error.response && error.response.status === 404
            ? `${name} already deleted from server`
            : `Failed to delete ${name}`;
        setNotif([msg, true]);
      });
  };

  return (
    <table style={{ width: '100%' }}>
      <tbody>
        {persons.map((p) => (
          <tr key={p.name}>
            <td>{p.name}</td>
            <td>{p.number}</td>
            <td>
              <button onClick={() => deletePerson(p.id, p.name)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Numbers;
