import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './images/freecodecamp.png';
import ButtonComponent from './components/ButtonComponent';
import Contador from './components/ContadorComponent';
import { useState } from 'react';


function App() {
  const [clicks, setClicks] = useState(0);
  const ManejarClick = () => {
    setClicks(clicks + 1);
  }
  const ManejarReset = () => {
    setClicks(0);
  }
  return (
    <div className='container'>
      <div className='freecodecamp--logo--content'>
        <img
          className='freecodecamp--logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp' />
      </div>
      <div className='contador--container'>
        <Contador clicks={clicks} />
        <div className='button--container'>
          <ButtonComponent text='Click'
            botonClick={true}
            manejarClick={ManejarClick} />
          <ButtonComponent text='Reset'
            botonClick={false}
            manejarClick={ManejarReset} />
        </div>

      </div>
    </div>
  );
}

export default App;
