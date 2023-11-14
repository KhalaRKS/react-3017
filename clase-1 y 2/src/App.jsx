import './App.css';
import reactLogo from './assets/react.svg';
import { Contador } from './components/contador/contador';
import { Logo } from './components/logo';
import { MediaCard } from './components/media_card/media_card';
import { Saludo } from './components/saludo/saludo';
import viteLogo from '/vite.svg';

// const saludo = 'Hola Nucba!';

// Tailwind css
const App = () => {

  return (
    <>
      <div>
        <Logo 
           className={'logo'}
           src={viteLogo}
           alt="Vite logo"
           url='https://vitejs.dev'
        />
        <Logo 
           className={'logo react'}
           src={reactLogo}
           alt="react logo"
           url='https://vitejs.dev'
        />
      </div>
      <Saludo
        text="Hola Nucba!"
        />
      <div className='card'>
        <Contador/>
      </div>
      <MediaCard/>
    </>
  );
};

export default App;
