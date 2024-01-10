import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from './Button';
import Input from './Input';

const ValidateOTPModal = ({ isOpen, onClose }) => {
    const [error, setError] = useState("")
    const [inputs, setInputs] = useState({
        otp: "",
    })

    const clearForm = () => {
        setInputs({
            otp: ""
        })
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs((prev) => ({...prev, [name]: value}));
    }

    // const handleValidateOtp = async (e) => {
    //     try {
    //        e.preventDefault()
    //        const response = await axios.post("http://127.0.0.1:5000/validateOTP", {
    //             otp: inputs.otp,
    //         }, {headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization':  inputs.otp
    //         }});
    //         console.log(inputs.otp)
    //         alert(response.data.message);
    //         clearForm();
    //         navigate('/dashboard');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleValidateOtp = async (e) => {
        try {
           e.preventDefault()
            clearForm();
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return isOpen ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 min-w-lg">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-mfauth_white p-6 rounded-md z-10 md:w-[768px]">
                <div className="text-right">
                    <Button
                    buttonStyle='text-white font-medium font-sm w-[86px] bg-mfauth_red rounded-md mb-2'
                    onClick={onClose}
                    buttonName="Close"
                    />
                </div>
                <div className='w-full px-4 space-y-2'>
                    <h3 className="text-xl text-center font-semibold mb-4">Validate OTP Password</h3>
                    <form method='POST' onSubmit={handleValidateOtp} className='space-y-3'>
                        <Input inputName='otp' inputType="text" inputValue={inputs.otp} inputStyle="w-full h-[42px] rounded-md" labelName='OTP Value' onChange={handleChange} placeHolder="Enter OTP value" />
                        <Button buttonName='Validate OTP' buttontype='submit' buttonStyle="w-full bg-mfauth_green h-[42px] rounded-md" />
                    </form>
                </div>
                <div className="w-full py-2 text-start">
                    <p className="py-2 text-start text-sm text-mfauth_red font-normal">{error}</p>
                </div>
            </div>
        </div>
        ) : null;
    }

export default ValidateOTPModal
