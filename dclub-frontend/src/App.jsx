import './App.css';
import Header from './components/Header';
import ProposalCard from './components/ProposalCard'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app-body">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
