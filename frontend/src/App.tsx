import Navbar from '@/components/Navbar';
import Router from '@/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>STONKS</h2>
        <Navbar />
      </div>
      <Router />
    </div>
  );
}

export default App;
