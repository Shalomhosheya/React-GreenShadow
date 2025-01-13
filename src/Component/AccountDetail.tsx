import React from "react";

// Importing images from the src folder
import userIcon from "../Assets/images/user.png";

function AccountDetails() {
  return (
    <div>
      {/* Hamburger menu icon */}
      <img
        src={userIcon} // Imported image
        className="hamburger"
        id="hamburger"
        alt="Menu Icon"
      />

      {/* Header container */}
      <div className="header-container" style={{ position: "relative" }}>
        <img
          src={userIcon} // Imported image
          className="account"
          id="accountIcon"
          alt="Account Icon"
        />
        <h1 id="accountname">example</h1>
      </div>
    </div>
  );
}

export default AccountDetails;
