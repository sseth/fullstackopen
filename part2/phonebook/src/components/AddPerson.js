const AddPerson = ({ name, number, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>name </span>
        <input name="name" value={name} onChange={onChange} />
      </div>
      <div>
        <span>number </span>
        <input name="number" value={number} onChange={onChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPerson;
