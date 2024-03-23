// App.js

import { useEffect, useState } from 'react';
import Name from './components/Name';
import Filter from './components/Filter';
import Form from './components/Form';
import phoneService from './services/phone';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [successMessage, setsuccessMessage] = useState(null)

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
    // If the name is empty, do nothing
    if (!newName.trim()) {
      return;
    }
  
    // If the number is empty, set it to an empty string
    const number = newNumber.trim() ? newNumber.trim() : 'N/A';
  
    // Check if the name already exists in the phonebook
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
  
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already in the phonebook.Do you want to update the number?`);
      if (!confirmUpdate) {
        return; // Exit the function if the user cancels
      }
    }
  
    // Create name object
    const nameObj = { name: newName, number: number };
  
    // Create or update name
    phoneService.createOrUpdate(nameObj)
      .then(() => {
        // show succes
        
        setsuccessMessage(
          `${nameObj.name} was added successfully`

        )
        setTimeout(() => { setsuccessMessage(null)}, 5000)


        // Update persons state with the updated list
        phoneService.getAll()
          .then((response) => {
            setPersons(response.data);
          });
      })
      .catch((error) => {
        console.error('Error adding or updating name:', error);
      });
  };
  

  const handleDelete = (id, name) => {
    // Confirm the action from the user before deleting the person
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirmDelete) {
      return; // Exit the function if the user cancels
    }

    // If the user confirms, proceed with the deletion
    phoneService.remove(id)
      .then(() => {
        //delete otification
        setsuccessMessage(
          `${name} was deleted successfully`

        )
        setTimeout(() => { setsuccessMessage(null)}, 3000)
        // Update persons state with the updated list
        phoneService.getAll()
          .then((response) => {
            setPersons(response.data);
          });
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
      <Notification message={successMessage} />
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add New</h2>
      <Form
        handleChange={handleChange}
        handleChange2={handleChange2}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Name
          key={person.id}
          person={person}
          handleDelete={() => handleDelete(person.id, person.name)}
        />
      ))}
    </div>
  );
};

export default App;
