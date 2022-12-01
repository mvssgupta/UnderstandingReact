import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import GreetPersons from './components/GreetPersons';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <GreetPersons name="Raghu"></GreetPersons>
      <GreetPersons name="Srinu"></GreetPersons>
    </div>
  );
}

export default App;
