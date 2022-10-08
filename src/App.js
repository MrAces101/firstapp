import logo from './logo.svg';
import React from 'react';
// import './App.css';

// // Simple header
// function Header() {
//   return <h1>Hello World</h1>;
// }

// function Heading() {
//   let title = "React is AWESOME!!";
//   return (
//       <h1>{title}</h1>
//   );
// }

// function Heading() {
//   return <h1>This is an h1 heading</h1>
// }

// function App() {
//   return ( 
//     <div className="App"> 
//       This is the starting code for "Your first component" ungraded lab 
//       <Heading /> 
//     </div> 
//   ); 
// }

// export default App;

function App() {
  const imgUrl = "https://picsum.photos/400/265";
  return ( 
    <div> 
      <img height={200} src={logo} alt="Logo img" />

      <img height={200} src={require('./logo.svg')}
      alt="required img" />

      <img height={200} src={imgUrl} alt="img from web" />
    </div> 
  ); 
}

export default App;