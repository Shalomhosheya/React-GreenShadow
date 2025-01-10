import React from 'react';

function LoginPage() {
  return (
  <>
  <div className='login'>
     <form>
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
        <button className="button1" id="signInBTN">
          Login
        </button>
      </form>
</div>
  </>

  );
}

export default LoginPage;
