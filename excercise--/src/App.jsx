import { useEffect, useState } from 'react';
import Name from './components/Name';
import Filter from './components/Filter';
import Form from './components/Form';
import phoneService from './services/phone';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    phoneService.getAll()
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewName();
        // Reset form fields after successful addition
        setNewName('');
        setNewNumber('');
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
  
    phoneService.create(nameObj)
      .then((response) => {
        console.log(response);
        setPersons([...persons, response.data]);
    
      })
      .catch((error) => {
        console.error('Error adding new name:', error);
      });
  };
  

  const handleDelete = (id,name) => {
    // Confirm the action from the user before deleting the person
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirmDelete) {
      return; // Exit the function if the user cancels
    }
  
    // If the user confirms, proceed with the deletion
    phoneService.remove(id)
      .then((response) => {
        console.log(response);
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting name:', error);
      });
  };
  

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleChange2 = (e) => {
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
      <Filter handleFilter={handleFilter} />
      <h2>Add New</h2>
      <Form handleChange={handleChange} handleChange2={handleChange2} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Name key={person.id} person={person} handleDelete={() => handleDelete(person.id,person.name)} />
      ))}
    </div>
  );
};

export default App;
