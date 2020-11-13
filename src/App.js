import './App.css';
import Counter from './containers/Counter/Counter';
import ResultList from './containers/ResultList/ResultList';
import { useState } from 'react';
import { connect } from "react-redux";
import { addSpecialResult } from './store/action';

function App(props) {
  const [cVisible, setCVisible] = useState(true);
  const [rVisible, setRVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setCVisible(!cVisible)} className="styleButton">COUNTER : {cVisible ? "ON" : "OFF"}</button>
      <button onClick={() => setRVisible(!rVisible)} className="styleButton">RESULT LIST : {rVisible ? "ON" : "OFF"}</button>
      <button onClick={() => props.onAddSpecial()} className="styleButton">ADD SPECIAL RESULT</button>
      {cVisible ? <Counter /> : null}
      {rVisible ? <ResultList /> : null}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddSpecial: () => dispatch(addSpecialResult())
  };
};

export default connect(null, mapDispatchToProps)(App);

