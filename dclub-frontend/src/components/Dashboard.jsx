import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="d-container">
        
      {switchBetween()}
      {inputBoxWithButton("Enter the address of new admin", "Change Admin")}

      {[
        listItem(1, "0x012343545346af323e3234235235239f3"),
        listItem(2, "0x012343545346af323e3234235235239f3"),
        listItem(3, "0x012343545346af323e3234235235239f3"),
        listItem(3, "0x012343545346af323e3234235235239f3"),
        listItem(3, "0x012343545346af323e3234235235239f3"),
        listItem(3, "0x012343545346af323e3234235235239f3"),
      ]}
      

    </div>
  );
};

const switchBetween = () => {
  return (
    <div className="sw-container">
      <div className="box">Members</div>
      <div className="box">Moderators</div>
      <div className="box">Admin</div>
    </div>
  );
};

const listItem = (index, address) => {
  return (
    <div className="li-container">
      <div>
        <i>{index + ". "}</i>
        <b>{address}</b>
      </div>
      <button className="remove-button">Remove</button>
    </div>
  );
};

const inputBoxWithButton = (placeHolder, name) => {
  return (
    <div className="b-container">
      <input type="text" id="inp" placeholder={"   " + placeHolder} />
      <button className="blue-button" id="submit">
        {name}
      </button>
    </div>
  );
};

export default Dashboard;
