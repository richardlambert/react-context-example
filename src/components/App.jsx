import { useState } from 'react';
import dogData from '../data/dog-data.json';
import DogContext from '../contexts/DogContext';
import Navbar from './Navbar';
import Card from './Card';

const App = () => {
  const [allDogs, setAllDogs] = useState(dogData);
  const [activeDog, setActiveDog] = useState(allDogs[0]);

  const selectActiveDog = (id) => {
    const selected = allDogs.filter((dog) => dog.id === id)[0];
    setActiveDog(selected);
  };

  return (
    <DogContext.Provider value={{ allDogs, activeDog, selectActiveDog }}>
      <Navbar />
      <Card />
    </DogContext.Provider>
  );
};

export default App;
