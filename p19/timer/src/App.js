import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import MyTimer from './components/MyTimer';
import Callbackhook from './todo/Callbackhook';

function App() {
  return (
    <div className="App">
      {/* <Timer  /> */}
      {/* <MyTimer  /> */}
      <Callbackhook />
    </div>
  );
}

export default App;
