// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";


function App() { 
  const [count, setCount] = useState(2);
  return(

    <div className="container">
           
          <h2 classname="num1"> {count} </h2>
          <button onClick={() => setCount(count +1)}> Increment</button>
          <button onClick={() => setCount(count * count)}> square </button>
          <button onClick={() => setCount(count / count)}> root </button>
          <button onClick={() => setCount(0)} disabled={count === 0}> reset</button>
        </div>
     );
}

export default App;
