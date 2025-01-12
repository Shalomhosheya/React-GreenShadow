import './App.css';
import LoginPage from './Pages/LoginPage';
import LoginSignupPage from './Pages/LoginSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/DashBoard';
import FieldPage from './Pages/FieldPage';

function App() {
  return (
    <Router>
      <body className='b1'>
        <Routes>
          {/* Route for LoginSignupPage */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Route for LoginPage
          <Route path="/login" element={<LoginSignupPage />} />
           */}
          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/FieldPage" element={<FieldPage />} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
