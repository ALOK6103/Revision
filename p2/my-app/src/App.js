import logo from './logo.svg';
import './App.css';
import Quiz from './pages/Quiz';
import AllRoutes from './routes/AllRoutes';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar  />
      <AllRoutes />
    </div>
  );
}

export default App;
