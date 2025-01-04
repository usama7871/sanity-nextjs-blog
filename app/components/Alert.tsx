import React from 'react';

type AlertProps = {
  message: string;
  type?: 'success' | 'error' | 'info';
};

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const alertStyles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className={`p-4 rounded-lg ${alertStyles[type]} mb-4`}>
      {message}
    </div>
  );
};

export default Alert; 