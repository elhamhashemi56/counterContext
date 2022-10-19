import logo from './logo.svg';
import './App.css';
import CounterPage from './components/CounterPage';
import { CounterProvider } from './components/store/CounterContext';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <CounterPage />
      </CounterProvider>
      
    </div>
  );
}

export default App;
