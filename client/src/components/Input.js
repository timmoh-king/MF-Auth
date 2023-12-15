import React from 'react';

const Input = ({
  index,
  method,
  labelName,
  placeHolder,
  isRequired,
  inputType,
  inputValue,
  inputName,
  inputStyle,
  onChange,
  error,
}) => {
  return (
      <div className="bg-mfauth_white border-mfauth_background rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-mfauth_background">
          <label className="block text-xl text-mfauth_black text-normal py-2 px-2 font-semibold">
              {labelName}
          </label>
          <input
              type={inputType ? inputType : "text"}
              className={`bg-mfauth_background text-sm font-normal px-2 h-[32px] rounded-sm shadow-none focus:outline-none focus:ring-1 focus:ring-mfauth_background ${inputStyle ? inputStyle : ""}`}
              key={index}
              method={method}
              placeholder={placeHolder}
              required={isRequired}
              value={inputValue}
              name={inputName}
              onChange={onChange}
          />
          {error ?
              <p className="text-mfauth_red font-normal text-sm pt-1">{error}</p>
              :
              <p className="hidden">No error</p>
          }
      </div>
  );
};
export default Input;