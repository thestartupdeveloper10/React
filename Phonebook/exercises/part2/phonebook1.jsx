import { useState } from 'react';
import Name from './components/Name';
import Filter from './components/Filter';
import Form from './components/Form';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('add name');
  const [newNumber, setNewNumber] = useState('add number');
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked submit button', e.target);
  };

  const addNewName = () => {
    // Check if the new name already exists in the persons array
    const nameExists = persons.some((person) => person.name === newName);

    // If the name already exists, issue a warning with the alert command
    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`);
      return; // Exit the function without adding the name
    }

    // If the name doesn't exist, add it to the persons array
    const nameObj = { name: newName, number: newNumber };
    setPersons(persons.concat(nameObj));
    setNewName('');
    setNewNumber('');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleChange2 = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      < Filter handleFilter={handleFilter} />
      <h2>Add New</h2>
      <Form handleChange={handleChange} handleChange2={handleChange2} addNewName={addNewName} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
      <Name persons={filteredPersons} />
    </div>
  );
};

export default App;
