
import './App.css';
import Cards from './Card';
import Navigationbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <h1>CS 230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800387142</p>
      <p>Hi I am Robert Copenhaver</p>
      <Cards/>
    </div>
  );
}

export default App;
