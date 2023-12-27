import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import GetOTPModal from './components/GetOTPModal';
import ValidateOTPModal from './components/ValidateOTPModal';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route path="getotp" element={<GetOTPModal isOpen={true} />} />
        <Route path="validateotp" element={<ValidateOTPModal isOpen={true} />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
