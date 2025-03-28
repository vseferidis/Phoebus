import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button contents/label
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Is button disabled?
   */
  disabled?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}: ButtonProps) => {
  return (
    <button
      className={`button ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 