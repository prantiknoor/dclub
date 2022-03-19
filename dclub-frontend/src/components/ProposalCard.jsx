import React from "react";
import "./proposal-card.css";

const ProposalCard = (props) => {
  return (
    <div className="container">
      <div className="p-container">
        <div className="p-card">
          <div className="p-title">{props.proposal.title}</div>
          <div className="p-address">{props.proposal.proposer}</div>

          <div className="p-des">
            {props.proposal.description}
          </div>

          <div className="p-footer">
            <div className="p-time">{props.proposal.postTime}</div>
            <div className="p-votes">{props.proposal.voteCount} votes</div>
          </div>
        </div>
        <div className="p-up-down">
          <button id="up"> + </button>
          <div id="p-vote">{props.proposal.point}</div>
          <button id="down"> - </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
