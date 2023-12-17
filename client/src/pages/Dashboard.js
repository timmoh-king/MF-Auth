import React from "react";
import { UserAuth } from "../context/AuthContext";
import Button from "../components/Button";

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const handleSignOut = async() => {
    try {
        await logout();
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      <h1>Welcome {user?.displayName} MFAuth Account</h1>
      {user ? (
        <Button linkTo='/' buttonName="Logout" buttonStyle="w-[168px] bg-mfauth_purple" onClick={handleSignOut} />
      ) : (
        <Button linkTo='/login' buttonName="Login" buttonStyle="w-[168px] bg-mfauth_purple" />
      )}
    </div>
  );
};

export default Dashboard;