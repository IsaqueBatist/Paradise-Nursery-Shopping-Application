import React from 'react';
import './style.css';

interface ButtonProps{
  content: string;
  type?: 'button' | 'submit' | 'reset';
  messageType?: 'success' | 'error';
  onClick?: () => void;
}

const Button = ({content, onClick, type = 'button', messageType = 'success'}: ButtonProps) => {
  return (
    <button className={messageType === 'success' ? 'success' : 'error'} type={type} onClick={onClick}>{content}</button>
  );
};

export default Button;