function Car({ car, deleteCar }) {
  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>
      <button onClick={() => deleteCar(car.id)}>Delete</button>
    </div>
  );
}

export default Car;