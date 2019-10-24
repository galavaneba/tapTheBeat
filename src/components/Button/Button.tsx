import React from 'react';
import css from './Button.module.scss';

export interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props  }) => {
  return (
    <button className={css.content} {...props}> 
      {children}
    </button>
  );
};

export default Button;
