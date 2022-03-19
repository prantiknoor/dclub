import React, { useState, useEffect } from "react";
import ProposalCard from "./ProposalCard";

const Home = (props) => {
  const [proposals, setProposals] = useState([
    {
      title: "It is the title",
      proposer: "0x1234432...234235235",
      description: "It is the description",
      postTime: 123425264654,
      voteCount: 60,
      point: 50,
    },
  ]);

  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [yourWalletAddress, setYourWalletAddress] = useState(null);
  const [error, setError] = useState(null);

  const [proposalCount, setProposalCount] = useState(0);

  const getProposalCount = async () => {
    if (window.ethereum) {
      const dclubContract = props.getContract();

      let proposalCount = await dclubContract.proposalCount();

      setProposalCount(proposalCount);
    }
  };

  const getAllProposals = async ()  => {
    if (window.ethereum) {
      const dclubContract = props.getContract();

      for (let i = 0; i < proposalCount; i++) {
          const proposal = await dclubContract.proposals(i);

          setProposals((prevData) => ({...prevData, proposal}));
      }
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setIsWalletConnected(true);
        setYourWalletAddress(account);
        console.log("Account connected: ", account);
      } else {
        setError("Install a MetaMask wallet to get our token.");
        console.log("No Metamask detected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //   checkIfWalletIsConnected();
  });

  return (
    <div>
      {proposals &&
        proposals.map((proposal) => (
          <ProposalCard proposal={proposal}></ProposalCard>
        ))}
    </div>
  );
};

export default Home;
