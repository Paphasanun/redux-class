import React, { useState } from 'react';
import {connect} from 'react-redux'

function CounterDisplay(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{
      backgroundColor: "beige",
      fontWeight: "5px",
      border: "4px solid black",
      width: "400px",
      margin: "0 auto",
      borderRadius: "8px",
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      boxShadow: "inset 3px 3px 3px 1px #6666"
    }}>
      <h1 style={{paddingTop: "10px", letterSpacing: "4px"}}>{props.ctr}</h1>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        ctr: state.ctrCombine.counter
    }
}

export default connect(mapStateToProps)(CounterDisplay);