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
      <div style={{paddingTop: 90}}></div>
      <Switch>
        <Route exact path="/">
          <ProposalCard/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
