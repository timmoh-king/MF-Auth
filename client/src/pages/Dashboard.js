import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <div className="container flex flex-row mx-auto justify-center md:mt-24">
      <div className="max-w-lg rounded-md overflow-hidden shadow-lg px-6 py-4 space-y-4">
      <div className="w-full flex flex-row items-center justify-between mb-8 ">
        <div className="items-center">
          <Logo /> 
        </div>
        <div>
          <Button buttonName='Logout' buttonStyle="w-[132px] bg-mfauth_purple h-[42px] rounded-md" />
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
        <Button buttonName='Reset Password' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
