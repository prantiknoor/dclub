import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from './components/Dashboard';
import ProposalCard from "./components/ProposalCard";

function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <ProposalCard/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
