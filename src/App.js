import './App.css';
import { Navbar } from './components/Navbar';
import Search from './components/search';
import { Result } from './components/result';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
}

export default App;
