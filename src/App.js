// import logo from './logo.svg';
import './App.css';
// import Heading from "./components/Heading";
import Promo from "./components/Promo";

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


// From Passing Props Exercise

// function App() {
//     return (
//         <div className="App">
//             <Heading firstName="Bob Jones" />
//             <Heading firstName="Sam" />
//             <Heading firstName="Moses" />
//         </div>
//     );
// };


// function App() {
//   return (
//       <div className="App">
//           <Promo heading="Don't miss this deal!" />
//           <Promo promoSubHeading="Subscribe to my newsletter and get all the items at 50% off!" />
//       </div>
//   );
// }


import Card from './components/Card'

// function App() {
//   return (
//     <div className="App">
//       <h1>Task: Add three Card elements</h1>
//       <Card h2="First card's h2" h3="First card's h3"/>
//       <Card h2="Second card's h2" h3="Second card's h3"/>
//       <Card h2="Third card's h2" h3="Third card's h3"/>
//     </div>
//   );
// };

// export default App;

// import Btn from './components/Btn'

// function App() {
//   return <Btn />

// };

// export default App;

// random number guesing game
// function App() {
//   function handleClick() {
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number');
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }
//   return (
//     <div>
//       <h1>Task: Add a button and handle a click event</h1>
//       <button onClick={handleClick}>
//       Guess the number between 1 and 3    
//     </button>
//     </div>
//   );
// }

// export default App;

// Frutis Scanner - managing state task
import React from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";

function App() {
  const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
  ]);
  
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;