import React from 'react';
import './style.css';

interface ButtonProps{
  content: string;
  onClick?: () => void;
}

const Button = ({content, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick}>{content}</button>
  );
};

export default Button;