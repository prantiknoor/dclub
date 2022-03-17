import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./proposal-card.css";

const ProposalCard = () => {
  return (
    <div className="container">
      <div className="p-container">
        <div className="p-card">
          <div className="p-title">It is the title of the proposal</div>
          <div className="p-address">0x1234567...89101123</div>

          <div className="p-des">
            It is the description of the proposal. It is the description of the
            proposal. It is the description of the proposal. It is the
            description of the proposal. It is the description of the proposal.
            It is the description of the proposal. It is the description of the
            proposal. It is the description of the proposal. It is the
            description of the proposal. It is the description of the proposal.
            It is the description of the proposal. It is the description of the
            proposal.
          </div>

          <div className="p-footer">
            <div className="p-time">12:10 pm, 3 March, 2022</div>
            <div className="p-votes">62 votes</div>
          </div>
        </div>
        <div className="p-up-down">
          <button id="up"> + </button>
          <div id="p-vote">50</div>
          <button id="down"> - </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
