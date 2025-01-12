import React from "react";

function AccountDetails() {
  return (
    <div>
      {/* Hamburger menu icon */}
      <img
        src="../Assets/images/menu"
        className="hamburger"
        id="hamburger"
        alt="Menu Icon"
      />

      {/* Header container */}
      <div className="header-container" style={{ position: "relative" }}>
        <img
          src="../Assets/images/user.png"
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
