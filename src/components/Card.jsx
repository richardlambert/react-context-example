import { useContext } from 'react';
import DogContext from '../contexts/DogContext';

const Card = () => {
  const { activeDog } = useContext(DogContext);
  const { name, breed } = activeDog;

  return (
    <div>
      <h2>{name}</h2>
      <p>{breed}</p>
    </div>
  );
};

export default Card;
