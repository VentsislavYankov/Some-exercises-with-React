import React, { useState } from "react";

const UsestateComp = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((preState) => ++preState);
  };


  //increaseCount();
  return (
    <div>
        <h2>Counter App</h2>
        <h3>Counter is {count}</h3>
        <button onClick={increaseCount}>increaseCount</button>
        <button onClick={()=>setCount((preState)=> preState -1)}>
          Decrease Count
        </button>
        <button onClick={()=>setCount(0)}>ResetCount</button>
    </div>
  );
};

export default UsestateComp;