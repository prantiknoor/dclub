import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import abi from "./contracts/DClub.json";
import { ethers } from "ethers";

function App() {
  const contractAddress = "";
  const contractABI = abi.abi;

  const getContract = () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      return contract;
    }

    return 'error';
  };

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div style={{ paddingTop: 90 }}></div>
        <Switch>
          <Route exact path="/">
            <Home getContract={getContract} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
