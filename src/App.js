import logo from './logo.svg';
import './App.css';

// Simple header
function Header() {
  return <h1>Hello World</h1>;
}

function Heading() {
  let title = "React is AWESOME!!";
  return (
      <h1>{title}</h1>
  );
}

function Heading() {
  return <h1>This is an h1 heading</h1>
}

function App() {
  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Heading /> 
    </div> 
  ); 
}

export default App;
