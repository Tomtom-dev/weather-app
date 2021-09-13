import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Search from './components/search';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
}

export default App;
