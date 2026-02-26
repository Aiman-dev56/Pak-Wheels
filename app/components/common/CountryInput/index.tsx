"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInputField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <PhoneInput
      country={'pk'}             // default country
      value={value}
      onChange={onChange}
      enableSearch={true}        // adds search bar
    containerClass="w-full"   // 🔥 VERY IMPORTANT
      inputClass="!w-full !p-4 !pl-14 !h-[56px] !rounded-lg !border-2 !border-gray-300 placeholder-gray-400 placeholder-opacity-80 focus:!outline-none"
      buttonClass="!border-2 !border-gray-300 !rounded-l-lg"
      dropdownClass="max-h-60 overflow-y-auto rounded-lg shadow-lg"
    />
  );
};

export default PhoneInputField;
