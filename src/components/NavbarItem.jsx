import { useContext } from 'react';
import DogContext from '../contexts/DogContext';

const NavbarItem = ({ dog }) => {
  const { activeDog, selectActiveDog } = useContext(DogContext);
  const { id, name } = dog;
  return (
    <li
      style={{ backgroundColor: activeDog.id === id ? 'green' : '' }}
      onClick={() => {
        selectActiveDog(id);
      }}
    >
      {name}
    </li>
  );
};

export default NavbarItem;
