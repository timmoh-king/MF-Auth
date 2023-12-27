import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import Button from "../components/Button"
import Input from "../components/Input"

const Login = () => {
  const [error, setError] = useState("")
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  
  const navigate = useNavigate()

  const clearForm = () => {
    setInputs({
      email: "",
      password: "",
    })
  }

  const handleChange = (e) => {
      const {name, value} = e.target
      setInputs((prev) => ({...prev, [name]: value}));
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://127.0.0.1:5000/login", {
        email: inputs.email,
        password: inputs.password,
      })
      clearForm();
      navigate('/dashboard')
    } catch (error) {
      setError(error.response.data.Error)
    }
  }
  return (
    <div className="container flex flex-row mx-auto justify-center md:mt-12 md:mb-12">
      <div className="max-w-lg rounded-md overflow-hidden shadow-lg px-6 py-4 space-y-4">
          <div className="flex flex-row items-start mb-6">
            <Logo /> 
          </div>
          <div className="w-full flex flex-row items-center text-center">
              <h3 className="text-4xl text-mfauth_black font-semibold">We Are Glad <span className="text-4xl text-mfauth_purple">You Are Back!!</span></h3>
          </div>
          <div className="items-center text-start">
              <p className="text-medium text-mfauth_gray font-normal">
                Enjoy secure, fast, encrypted authentication services free from cyber attacks.
              </p>
          </div>
          <div className="w-full">
            <Button buttonName='Sign in with Google' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
          </div>
          <div className="items-center text-center">
              <p className="text-sm text-mfauth_gray font-normal">
                or sign in with email
              </p>
          </div>
          <form method="POST" onSubmit={handleLogin} className="space-y-0">
            <div className="w-full">
              <Input inputName='email' inputStyle="w-full h-[42px] rounded-md" labelName='Email Address' onChange={handleChange} placeHolder="Enter your email address" />
            </div>
            <div className="w-full">
              <Input inputName='password' inputType="password" inputStyle="w-full h-[42px] rounded-md" labelName='Password' onChange={handleChange} placeHolder="Enter your password" />
            </div>
            <div className="w-full py-2 text-start">
              <p className="py-2 text-start text-sm text-mfauth_red font-normal">{error}</p>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="py-2 text-start">
                <Link to="/signup" className="text-sm text-mfauth_gray font-normal hover:font-medium hover:text-mfauth_purple">
                  Don't have an account?
                </Link>
              </div>
              <div className="py-2 text-end">
                <Link to="/reset_password" className="text-sm text-mfauth_gray font-normal hover:font-medium hover:text-mfauth_purple">
                  forgot password?
                </Link>
              </div>
            </div>
            
            <div className="w-full py-2 md: mb-12">
              <Button buttonName='Login' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
            </div>
          </form>
      </div>
    </div>
  );
};

export default Login;
