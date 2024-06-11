import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className=" page-link ml-2 px-3 py-2 bg-slate-500 text-white rounded  "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
