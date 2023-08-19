import React from "react";

type ButtonProps = {
  bgColor: string;
  text: string;
  textColor: string;
};

const Button = ({ bgColor, text, textColor }: ButtonProps) => {
  return (
    <button
      className={`${bgColor} ${textColor} font-semibold px-3 py-2 rounded-lg border border-gray-700`}
    >
      {text}
    </button>
  );
};

export default Button;
