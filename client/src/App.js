import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
