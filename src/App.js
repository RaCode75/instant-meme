import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [memeImg, setMeme] = useState('');

  const memeLinea1 = (event) =>{
    
    setLinea1(event.target.value);
  }

  const memeLinea2 = (event) =>{
    
    setLinea2(event.target.value);
  }

  const memeBack = (event) =>{
    
    setMeme(event.target.value);
  }

  return (
    <div className="App">
   
    <select onChange= {memeBack}>
      <option value="fire">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="history">History channel</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">PhilosoRaptor</option>
      <option value="smart">Smart guy</option>
    </select><br />

    <input onChange={ memeLinea1 } type="text" placeholder='Linea 1' /> <br />
    <input onChange={ memeLinea2 } type="text" placeholder='Linea 2' /> <br />
    <button>Exportar</button>

      <div>

        <span>{linea1}</span> <br />
        <span>{linea2}</span> 
        <img src= {'/img/' + memeImg + '.jpg' } />
      </div>

    </div>
  ); 
}

export default App;
