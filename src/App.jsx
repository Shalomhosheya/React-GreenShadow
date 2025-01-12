import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/DashBoard';
import FieldPage from './Pages/FieldPage';
import StaffPage from './Pages/StaffPage';

function App() {
  return (
    <Router>
        <Routes>
          {/* Route for LoginSignupPage */}
          <Route path="/" element={<LoginPage />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/FieldPage" element={<FieldPage />} />
          <Route path="/StaffPage" element={<StaffPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
