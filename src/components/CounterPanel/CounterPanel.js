import React from 'react';
import "./CounterPanel.css";
import { connect } from "react-redux";
import { useState } from 'react'

function CounterPanel(props) {
    const [value, setValue] = useState();
  return (
    <div>
      <button
        onClick={props.onIncrementCounter}
        className="button-codecamp">INCREASE</button>
      <button
        onClick={props.onDecrementCounter}
        className="button-codecamp">DECREASE</button>
      <button
        onClick={() => props.onAddCounter(10)}
        className="button-codecamp">ADD 10</button>
      <button
        onClick={() => props.onSubtractCounter(10)}
        className="button-codecamp">SUBTRACT 10</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: (value) => dispatch({ type: "ADD", value }),
    onSubtractCounter: (value) => dispatch({ type: "SUBTRACT", value }),
  };
};

export default connect(null, mapDispatchToProps)(CounterPanel);