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

function App() {
  return (
      <div className="App">
          <Promo heading="Don't miss this deal!" />
          <Promo promoSubHeading="Subscribe to my newsletter and get all the items at 50% off!" />
      </div>
  );
}
export default App;
