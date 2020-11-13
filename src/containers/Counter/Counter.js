import CounterPanel from "../../components/CounterPanel/CounterPanel";
import React from "react";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import "./Counter.css";

function Counter() {
  return (
    <div className="App">
      <div >
        <button className="styleButton">COUNTER</button>
        <button className="styleButton">RESULT LIST</button>
      </div>
      <img
        style={{ marginBottom: "20px", width: "290px", height: "auto" }}
        src={
          "https://1.bp.blogspot.com/-rYr--DLAnuY/WDgFKzuOIII/AAAAAAAD2Ys/L1kXxkYnq6k2BEUZdhqXTWaxMmSeQAO9gCLcB/s1600/AS001244_00.gif"
        }
      />
      <CounterDisplay />
      <CounterPanel />
    </div>
  );
}

export default Counter;
