import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from './Button';
import Input from './Input';


const GetOTPModal = ({ isOpen, onClose }) => {
    const [error, setError] = useState("")
    const [inputs, setInputs] = useState({
        phone_number: "",
    })

    const clearForm = () => {
        setInputs({
            phone_number: ""
        })
    }

    const navigate = useNavigate();

    const handleGetOtp = async () => {
        try {
           await axios.post("http://127.0.0.1:5000/getOTP", {
                phone_number: inputs.phone_number
           });
           clearForm();
           onClose();
           navigate('/validateotp')
        } catch (error) {
            setError(error.response.data.Error);
        }
    }

    return isOpen ? (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 min-w-lg">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-mfauth_white p-6 rounded-md z-10 md:w-[768px]">
            <div className="text-right">
                <Button
                buttonStyle='text-white font-medium font-sm w-[86px] bg-mfauth_red rounded-md mb-2'
                onClick={() => onClose()}
                buttonName="Close"
                />
            </div>
            <div className='w-full px-4 space-y-2'>
                <h3 className="text-xl text-center font-semibold mb-4">Get OTP Password</h3>
                <form method='POST' onSubmit={handleGetOtp} className='space-y-3'>
                    <Input inputName='phone_number' inputStyle="w-full h-[42px] rounded-md" labelName='Mobile Number' placeHolder="Enter your mobile number" />
                    <Button buttonName='Get OTP' buttonStyle="w-full bg-mfauth_green h-[42px] rounded-md" />
                </form>
            </div>
            <div className="w-full py-2 text-start">
                <p className="py-2 text-start text-sm text-mfauth_red font-normal">{error}</p>
            </div>
        </div>
    </div>
    ) : null;
}

export default GetOTPModal
