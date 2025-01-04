"use-client";
import React from 'react';

type CardProps = {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, content, footer, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-4">{content}</div>
      {children && <div className="mt-4 border-t pt-2">{children}</div>}
      {footer && <div className="mt-4 border-t pt-2">{footer}</div>}
    </div>
  );
};

export default Card; 