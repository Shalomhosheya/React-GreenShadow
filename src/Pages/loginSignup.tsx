import React from 'react';

function LoginSignupPage() {
  return (
    <div className='login'>
        <form>
      <label htmlFor="chk" aria-hidden="true" className="label1">
        Sign up
      </label>
      <input
        type="text"
        name="txt"
        placeholder="First name"
        required
        className="field"
        id="usernameText"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        required
        className="field"
        id="lastname"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="field"
        id="emailText"
      />

      <select className="field" id="roleselect">
        <option value="" disabled selected>
          Select Role
        </option>
        {/* Options will be dynamically added */}
      </select>

      <input
        type="password"
        name="pswd"
        placeholder="Password"
        required
        className="field"
        id="passwordtext"
      />
      <button id="signUPBtn" className="button1">
        Sign up
      </button>
    </form>
    </div>
  );
}

export default LoginSignupPage;
