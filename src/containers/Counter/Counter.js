import CounterPanel from "../../components/CounterPanel/CounterPanel";

import React from "react";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";

function Counter() {
  return (
    <div className="App">
      <img   style={{marginBottom: "20px", marginTop: "30px"}} src={"https://1.bp.blogspot.com/-rYr--DLAnuY/WDgFKzuOIII/AAAAAAAD2Ys/L1kXxkYnq6k2BEUZdhqXTWaxMmSeQAO9gCLcB/s1600/AS001244_00.gif"} />
      <CounterDisplay />
      <CounterPanel />
    </div>
  );
}

export default Counter;
