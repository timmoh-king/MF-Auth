import React from 'react';
import Button from './Button';
import Input from './Input';

const ValidateOTPModal = ({ isOpen, onClose }) => {
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
                    <form method='POST' className='space-y-3'>
                        <Input inputName='otp' inputStyle="w-full h-[42px] rounded-md" labelName='OTP Value' placeHolder="Enter OTP value" />
                        <Button buttonName='Validate OTP' buttonStyle="w-full bg-mfauth_green h-[42px] rounded-md" />
                    </form>
                </div>
            </div>
        </div>
        ) : null;
    }

export default ValidateOTPModal
