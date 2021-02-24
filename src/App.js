import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import img from './Image/nike-jordan.jpg'
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);

  const handleQuantilySum = () => {
    setNumber((prevNumber) => {
      return prevNumber + 1;
    })
  }

  const handleQuantilySub = () => {
    if(number == 1){
      return number;
    }
    setNumber((prevNumber) => {
      return prevNumber - 1;
    })
  }

  return (
    <Cards 
      img={img}
      title= "Air Jordan 4 Retro SE"
      sex= "Men's Shoe"
      infor= "Sail/Starfish/Light Smoke Grey/ Blue"
      handleQuantilySub= {handleQuantilySub}
      quantily= "Quantily"
      number= {number}
      handleQuantilySum= {handleQuantilySum}
      price= {5589000 * number}
    />
  );
}

export default App;
