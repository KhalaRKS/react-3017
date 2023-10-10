import './App.css';
import reactLogo from './assets/react.svg';
import { Contador } from './components/contador';
import { Logo } from './components/logo';
import { Saludo } from './components/saludo';
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
