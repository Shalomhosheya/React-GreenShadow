import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/DashBoard';
import FieldPage from './Pages/FieldPage';
import StaffPage from './Pages/StaffPage';
import VehiclePage from './Pages/VehiclePage';

function App() {
  return (
    <Router>
        <Routes>
          {/* Route for LoginSignupPage */}
          <Route path="/" element={<LoginPage />} />
          
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/FieldPage" element={<FieldPage />} />
          <Route path="/StaffPage" element={<StaffPage />} />
          <Route path="/VehiclePage" element={<VehiclePage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
