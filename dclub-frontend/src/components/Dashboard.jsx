import React from "react";
import "./dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isModerator, setIsModerator] = useState(true);
  const [isMember, setIsMember] = useState(true);
  const [inputValue, setInputValue] = useState({
    newAdmin: "",
    newModerator: "",
    moderator: "",
    newMember: "",
    member: "",
    title: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setInputValue((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const proposalCreationCard = () => {
    return (
      <div className="p-card p-creation-card">
        <label>Create new Proposal</label>
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          placeholder="Enter title here..."
        />
        <input
          type="text"
          name="description"
          onChange={handleInputChange}
          placeholder="Enter description here..."
        />
        <button className="blue-button">Post Proposal</button>
      </div>
    );
  };

  const inputBoxWithButton = (placeHolder, name, btnName) => {
    return (
      <div className="b-container">
        <input
          type="text"
          id="inp"
          placeholder={placeHolder}
          name={name}
          onChange={handleInputChange}
        />
        <button className="blue-button" id="submit">
          {btnName}
        </button>
      </div>
    );
  };

  return (
    <div className="d-container">
      {isAdmin &&
        inputBoxWithButton(
          "Enter new admin address",
          "newAdmin",
          "Change Admin"
        )}
      {isAdmin &&
        inputBoxWithButton(
          "Enter new moderator address",
          "newModerator",
          "Add moderator"
        )}
      {isAdmin &&
        inputBoxWithButton(
          "Enter moderator address",
          "moderator",
          "Remove moderator"
        )}
      {isModerator &&
        inputBoxWithButton(
          "Enter new member address",
          "newMember",
          "Add member"
        )}
      {isModerator &&
        inputBoxWithButton("Enter member address", "member", "Remove member")}
      {isMember && proposalCreationCard()}
    </div>
  );
};

export default Dashboard;
