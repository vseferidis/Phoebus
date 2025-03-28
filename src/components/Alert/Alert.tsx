import React from 'react';
import './Alert.css';

export interface AlertProps {
  /**
   * Alert contents
   */
  children: React.ReactNode;
  /**
   * Alert variant
   */
  variant?: 'success' | 'warning' | 'danger' | 'info';
  /**
   * Optional title for the alert
   */
  title?: string;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const Alert = ({
  children,
  variant = 'info',
  title,
  className = '',
}: AlertProps) => {
  return (
    <div className={`alert ${variant} ${className}`}>
      {title && <div className="alert-title">{title}</div>}
      <div className="alert-content">{children}</div>
    </div>
  );
}; 