import './App.css';
import HomePage from './Components/HomePage/HomePage'
import VisualData from './Components/VisualData/VisualData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
        <VisualData/>
      </header>
    </div>
  );
}

export default App;
