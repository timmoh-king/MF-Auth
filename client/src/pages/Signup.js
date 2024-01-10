import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";

const Signup = () => {
  const [error, setError] = useState("")
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirm_password: ""
  })

  const navigate = useNavigate()

  const clearForm = () => {
    setInputs({
      email: "",
      password: "",
      confirm_password: ""
    })
  }

  const handleChange = (e) => {
      const {name, value} = e.target
      setInputs((prev) => ({...prev, [name]: value}));
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://127.0.0.1:5000/signup", {
        email: inputs.email,
        password: inputs.password,
        confirm_password: inputs.confirm_password
      })
      clearForm();
      navigate('/login')
    } catch (error) {
      setError(error.response.data.Error)
    }
  }

  const handleSignInWithGoogle = async() => {
    try {
      await axios.post("https://localhost:5005/login_with_google")
      console.log("Signin with google");
      navigate('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container flex flex-row mx-auto justify-center md:mt-12 md:mb-12">
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
        <Button onClick={handleSignInWithGoogle} buttonName='Continue with Google' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
      </div>
      <div className="items-center text-center">
          <p className="text-sm text-mfauth_gray font-normal">
            or sign up with email
          </p>
      </div>
      <form method="POST" onSubmit={handleSignUp} className="space-y-0">
        <div className="w-full">
          <Input inputName='email' inputStyle="w-full h-[42px] rounded-md" labelName='Email Address' onChange={handleChange} placeHolder="Enter your email address" />
        </div>
        <div className="w-full">
          <Input inputName='password' inputType="password" inputStyle="w-full h-[42px] rounded-md" labelName='Enter Password' onChange={handleChange} placeHolder="Enter your password" />
        </div>
        <div className="w-full">
          <Input inputName='confirm_password' inputType="password" inputStyle="w-full h-[42px] rounded-md" labelName='Confirm Password' onChange={handleChange} placeHolder="Enter your password" />
        </div>
        <div className="w-full py-2 text-start">
          <p className="py-2 text-start text-sm text-mfauth_red font-normal">{error}</p>
        </div>
        <div className="w-full py-2 text-end">
          <Link to="/login" className="text-sm text-mfauth_gray font-normal hover:font-medium hover:text-mfauth_purple">
            already registered?
          </Link>
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
