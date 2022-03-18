import React from "react";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="content">
        <label className="logo" onClick={() => history.push("/")}>
          dClub
        </label>
        <button
          className="blue-button"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Header;
