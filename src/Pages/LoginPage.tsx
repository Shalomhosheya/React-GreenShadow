import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const predefinedRoles = ["Manager", "Admin", "Scientist"]; // Predefined roles
  const [roles, setRoles] = useState<string[]>(predefinedRoles); // Set initial roles

  // Form state
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/user/roles')
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          const combinedRoles = [...new Set([...predefinedRoles, ...response.data])];
          setRoles(combinedRoles);
        }
      })
      .catch((error) => console.error('Error fetching roles:', error));
  }, []);

  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await checkCredentials();
  };
  
  const checkCredentials = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/viewAllUsers');
      const users = response.data;
  
      // Find user with matching credentials
      const user = users.find(
        (u: any) =>
          u.email.toLowerCase() === loginData.email.toLowerCase() && // Case-insensitive email match
          u.password === loginData.password // Password must match exactly
      );
  
      if (user) {
        alert('Login successful! Redirecting...');
        navigate('/dashboard');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
      alert('Error checking credentials');
    }
  };
  
  
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/addUser', signupData);
      alert('User registered successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div className="b1">
      <div className="main1">
        <input type="checkbox" id="chk" aria-hidden="true" />

        {/* Sign Up Form */}
        <div className="signup">
          <form onSubmit={handleSignUp}>
            <label htmlFor="chk" aria-hidden="true" className="label1">
              Sign up
            </label>
            <input
              type="text"
              placeholder="First name"
              required
              className="field"
              value={signupData.firstName}
              onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="field"
              value={signupData.lastName}
              onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="field"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            />

            <select
              className="field"
              required
              value={signupData.role}
              onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
            >
              <option value="" disabled>
                Select Role
              </option>
              {roles.length > 0 ? (
                roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))
              ) : (
                <option disabled>Loading roles...</option>
              )}
            </select>

            <input
              type="password"
              placeholder="Password"
              required
              className="field"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button type="submit" className="button1">
              Sign up
            </button>
          </form>
        </div>

        {/* Login Form */}
        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true" className="label1">
              Login
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="field"
              value={loginData.email}// get the value add a get req and check if the credentials are correct
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="field"
              value={loginData.password}// get the value add a get req and check if the credentials are correct
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button className="button1" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
