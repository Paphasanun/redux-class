import logo from './logo.svg';
import './App.css';
import Counter from './containers/Counter/Counter'
import ResultList from './containers/ResultList/ResultList';
import { useState } from 'react'

function App() {
  const [cVisible, setCVisible] = useState(true)
  const [rVisible, setRVisible] = useState(true)
  
  return (
    <div className="App">
      <button onClick={() => setCVisible(!cVisible)} className="styleButton">COUNTER : {cVisible ? "ON" : "OFF"}</button>
        <button onClick={() => setRVisible(!rVisible)} className="styleButton">RESULT LIST : {rVisible ? "ON" : "OFF"}</button>
      {cVisible ? <Counter /> : null}
      {rVisible ? <ResultList /> : null}
    </div>
  );
}

export default App;
