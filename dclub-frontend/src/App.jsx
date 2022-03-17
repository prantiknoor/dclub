import './App.css';
import Header from './components/Header';
import ProposalCard from './components/ProposalCard'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app-body">
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
      </div>
    </div>
  );
}

export default App;
