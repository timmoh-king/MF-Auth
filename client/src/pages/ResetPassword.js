import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import Button from "../components/Button"
import Input from "../components/Input"

const ResetPassword = () => {
  const [error, setError] = useState("")
  const [inputs, setInputs] = useState({
    email: "",
  })
  
  const navigate = useNavigate()

  const clearForm = () => {
    setInputs({
      email: "",
    })
  }

  const handleChange = (e) => {
      const {name, value} = e.target
      setInputs((prev) => ({...prev, [name]: value}));
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://127.0.0.1:5000/reset_password", {
        email: inputs.email,
      })
      clearForm();
      navigate('/login')
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div className="container flex flex-row mx-auto justify-center md:mt-24 md:mb-24">
      <div className="max-w-lg rounded-md overflow-hidden shadow-lg px-6 py-4 space-y-4">
          <div className="flex flex-row items-start mb-6">
            <Logo /> 
          </div>
          <div className="w-full flex flex-row items-center text-center">
              <h3 className="text-4xl text-mfauth_black font-semibold">Ooops Sorry <span className="text-4xl text-mfauth_purple">Let's Reset!!</span></h3>
          </div>
          <div className="items-center text-start">
              <p className="text-medium text-mfauth_gray font-normal">
                Enjoy secure, fast, encrypted authentication services free from cyber attacks.
              </p>
          </div>
          <form method="POST" onSubmit={handleResetPassword} className="space-y-0">
            <div className="w-full">
              <Input inputName='email' inputStyle="w-full h-[42px] rounded-md py-0" labelName='Email Address' onChange={handleChange} placeHolder="Enter your email address" />
            </div>
            <div className="w-full py-2 text-start">
              <p className="py-2 text-start text-sm text-mfauth_red font-normal">{error}</p>
            </div>
            <div className="w-full py-2 text-start">
                <Link to="/login" className="text-sm text-mfauth_gray font-normal hover:font-medium hover:text-mfauth_purple">
                    Back to signin?
                </Link>
            </div>
            <div className="w-full py-2 md: mb-12">
              <Button buttonName='Reset Password' buttonStyle="w-full bg-mfauth_purple h-[42px] rounded-md" />
            </div>
          </form>
      </div>
    </div>
  );
};

export default ResetPassword;
