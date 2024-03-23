// services/phone.js

import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl);
};

const createOrUpdate = async (nameObj) => {
    // Check if the person already exists in the phonebook
    const existingPerson = await axios.get(`${baseUrl}?name=${nameObj.name}`);
    
    if (existingPerson.data.length > 0) {
        // If the person exists, update the phone number using PUT method
        await axios.put(`${baseUrl}/${existingPerson.data[0].id}`, nameObj);
    } else {
        // If the person does not exist, add a new person using POST method
        await axios.post(baseUrl, nameObj);
    }
};

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, createOrUpdate, remove };
