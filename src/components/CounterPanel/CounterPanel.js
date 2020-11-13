import React from "react";
import "./CounterPanel.css";
import { connect } from "react-redux";
import { useState } from "react";
import { add, increment, decrement, subtract } from "../../store/action";

function CounterPanel(props) {
  const [value, setValue] = useState();
  return (
    <div>
      <button onClick={props.onIncrementCounter} className="button-codecamp">
        INCREASE
      </button>
      <button onClick={props.onDecrementCounter} className="button-codecamp">
        DECREASE
      </button>
      <button
        onClick={() => props.onAddCounter(10)}
        className="button-codecamp"
      >
        ADD 10
      </button>
      <button
        onClick={() => props.onSubtractCounter(10)}
        className="button-codecamp"
      >
        SUBTRACT 10
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: (value) => dispatch(add(value)),
    onSubtractCounter: (value) => dispatch(subtract(value)),
  };
};

export default connect(null, mapDispatchToProps)(CounterPanel);
