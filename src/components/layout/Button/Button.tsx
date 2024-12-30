import React from 'react';
import './style.css';

interface ButtonProps{
  content: string;
  type?: 'button' | 'submit' | 'reset';
  messageType?: 'success' | 'error';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({disabled, content, onClick, type = 'button', messageType = 'success'}: ButtonProps) => {
  const getClassName = () => {
    if (messageType === 'success') return 'success';
    if (messageType === 'error') return 'error';
    if (disabled) return 'disabled';
    return '';
  };
  return (
    <button className={getClassName()} type={type} onClick={onClick}>{content}</button>
  );
};

export default Button;