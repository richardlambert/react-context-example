import { useContext } from 'react';
import DogContext from '../contexts/DogContext';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const { allDogs, activeDog } = useContext(DogContext);
  return (
    <ul>
      {allDogs.map((dog) => (
        <NavbarItem key={dog.id} dog={dog} />
      ))}
    </ul>
  );
};

export default Navbar;
