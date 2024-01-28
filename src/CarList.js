import axios from 'axios';
import { useEffect, useState } from 'react';
import Car from './Car';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('https://65b5936241db5efd2867c770.mockapi.io/week15promineotech/Car-app')
      .then(response => {
        setCars(response.data);
      });
  }, []);

  const deleteCar = (id) => {
    axios.delete(`https://65b5936241db5efd2867c770.mockapi.io/week15promineotech/Car-app/${id}`)
      .then(response => {
        setCars(cars.filter(car => car.id !== id));
      });
  };

  return (
    <div>
      {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} />)}
    </div>
  );
}

export default CarList;