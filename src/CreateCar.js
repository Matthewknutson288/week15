import axios from 'axios';
import { useState } from 'react';

function CreateCar({ setCars }) {
  const [car, setCar] = useState({ make: '', model: '', year: '', price: '' });

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://65b5936241db5efd2867c770.mockapi.io/week15promineotech/Car-app', car)
      .then(response => {
        setCars(prevCars => [...prevCars, response.data]);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="make" onChange={handleChange} placeholder="Make" />
      <input type="text" name="model" onChange={handleChange} placeholder="Model" />
      <input type="number" name="year" onChange={handleChange} placeholder="Year" />
      <input type="number" name="price" onChange={handleChange} placeholder="Price" />
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CreateCar;