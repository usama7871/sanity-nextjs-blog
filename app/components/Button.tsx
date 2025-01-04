import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 