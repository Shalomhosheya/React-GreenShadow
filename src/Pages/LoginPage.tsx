import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add any login validation or API call here
    // On successful login, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <>
      <div className='main1'>
        <input type="checkbox" id="chk" aria-hidden="true" />
        
        {/* Sign Up Form */}
        <div className='signup'>
          <form>
            <label htmlFor='chk' aria-hidden="true" className="label1">
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

        {/* Login Form */}
        <div className='login'>
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true" className="label1">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="field"
              id="emailText2"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
              className="field"
              id="passwordtext2"
            />
            <button className="button1" id="signInBTN" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
