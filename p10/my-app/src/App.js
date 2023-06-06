import logo from './logo.svg';
import './App.css';
import DragAndDrop from './components/DragAndDrop';
import FileUpload from './components/FileUpload';
import SearchBar from './components/SearchBar';
import ChildComponent from './example1/ChildComponent';
import ParentComponent from './example1/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <DragAndDrop  /> */}
      {/* <FileUpload /> */}
      {/* <ChildComponent  /> */}
      <ParentComponent  />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
