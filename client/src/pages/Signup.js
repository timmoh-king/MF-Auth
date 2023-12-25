import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";

const Signup = () => {
  return (
    <div className="container flex flex-row mx-auto justify-center md:mt-28">
      <div className="max-w-lg rounded-md overflow-hidden shadow-lg px-6 py-4 space-y-4">
      <div className="flex flex-row items-start mb-6">
        <Logo /> 
      </div>
      <div className="w-full flex flex-row items-center text-center">
          <h3 className="text-4xl text-mfauth_black font-semibold">Welcome Let's <span className="text-4xl text-mfauth_purple">Get Started!!</span></h3>
      </div>
      <div className="items-center text-start">
          <p className="text-medium text-mfauth_gray font-normal">
            Enjoy secure, fast, encrypted authentication services free from cyber attacks.
          </p>
      </div>
      <div className="w-full">
        <Button buttonName='Continue with Google' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
      </div>
      <div className="items-center text-center">
          <p className="text-sm text-mfauth_gray font-normal">
            or sign up with email
          </p>
      </div>
      <form method="POST" className="space-y-0">
        <div className="w-full">
          <Input inputName='email' inputStyle="w-full h-[42px] rounded-md" labelName='Email Address' placeHolder="Enter your email address" />
        </div>
        <div className="w-full">
          <Input inputName='password' inputStyle="w-full h-[42px] rounded-md" labelName='Enter Password' placeHolder="Enter your password" />
        </div>
        <div className="w-full">
          <Input inputName='confirm_password' inputStyle="w-full h-[42px] rounded-md" labelName='Confirm Password' placeHolder="Enter your password" />
        </div>
        <div className="w-full py-2 text-end">
          <p className="text-sm text-mfauth_gray font-normal hover:font-medium hover:text-mfauth_purple">
            already registered?
          </p>
        </div>
        <div className="w-full py-2 md: mb-12">
          <Button buttonName='Signup' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
        </div>
      </form>
    </div>
  </div>
  );
};

export default Signup;