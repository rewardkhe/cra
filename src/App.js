import React, { useState } from "react";


function App() { 
  const [count, setCount] = useState(2);
  return(

    <div className="container">
           
          <h2 classname="num1"> {count} </h2>
          <button onClick={() => setCount(count +1)}> Increment</button>
          <button onClick={() => setCount(count * count)}> square </button>
          <button onClick={() => setCount(count ** 0.5)}> root </button>
          <button onClick={() => setCount(0)} disabled={count === 0}> reset</button>
        </div>
     );
}

export default App;
