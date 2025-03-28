import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  /**
   * Image source for the avatar
   */
  src?: string;
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  /**
   * Size of the avatar
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const Avatar = ({
  src,
  alt = '',
  size = 'medium',
  className = '',
}: AvatarProps) => {
  return (
    <div className={`avatar ${size} ${className}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="avatar-placeholder">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}; 