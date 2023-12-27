import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/logout")
      navigate('/login')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const handleResetPassword = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/logout")
      navigate('/login')
      navigate('/reset_password')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="container flex flex-row mx-auto justify-center md:mt-12 md:mb-12">
      <div className="max-w-lg rounded-md overflow-hidden shadow-lg px-6 py-4 space-y-4">
      <div className="w-full flex flex-row items-center justify-between mb-8 ">
        <div className="items-center">
          <Logo /> 
        </div>
        <div>
          <Button onClick={handleLogout} buttonName='Logout' buttonStyle="w-[132px] bg-mfauth_purple h-[42px] rounded-md" />
        </div>
      </div>
      <div className="w-full flex flex-row items-center text-center">
          <h3 className="text-4xl text-mfauth_black font-semibold">Welcome to <span className="text-3xl text-mfauth_purple">Your Dashboard!!</span></h3>
      </div>
      <div className="items-center text-start">
          <p className="text-medium text-mfauth_gray font-normal">
            Enjoy secure, fast, encrypted authentication services free from cyber attacks.
          </p>
      </div>
      <div className="w-full">
        <Button onClick={handleResetPassword} buttonName='Reset Password' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
