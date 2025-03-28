import React, { useState } from 'react';
import { IconProps, Icon } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Button.css';

type PhosphorIconName = keyof typeof PhosphorIcons;
type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

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
  /**
   * Name of the Phosphor icon to show on the left side
   */
  leftIcon?: PhosphorIconName;
  /**
   * Name of the Phosphor icon to show on the right side
   */
  rightIcon?: PhosphorIconName;
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Weight of the icons (duotone, regular, bold, etc.)
   */
  iconWeight?: 'duotone' | 'regular' | 'bold' | 'fill' | 'thin';
  /**
   * Whether the button should show loading and done states
   */
  loadable?: boolean;
  /**
   * Callback fired when the button finishes loading
   */
  onLoadComplete?: () => void;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  size = 'medium',
  iconWeight = 'duotone',
  loadable = false,
  onLoadComplete,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading) return;

    if (loadable) {
      setIsLoading(true);
      // Simulate loading for 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
      setIsDone(true);
      onLoadComplete?.();
    } else {
      onClick?.();
    }
  };

  const handleMouseDown = () => {
    if (!disabled && !isLoading) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 20;
      case 'medium':
        return 24;
      case 'large':
        return 32;
      default:
        return 24;
    }
  };

  const LeftIcon = leftIcon ? (PhosphorIcons[leftIcon] as PhosphorIcon) : null;
  const RightIcon = rightIcon ? (PhosphorIcons[rightIcon] as PhosphorIcon) : null;
  const SpinnerIcon = PhosphorIcons.Spinner as PhosphorIcon;
  const CheckIcon = PhosphorIcons.Check as PhosphorIcon;

  return (
    <button
      className={`button ${variant} ${size} ${isPressed ? 'pressed' : ''} ${isLoading ? 'loading' : ''} ${isDone ? 'done' : ''} ${isFocused ? 'focused' : ''} ${className}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <SpinnerIcon size={getIconSize()} weight={iconWeight} className="spinning" />
      ) : isDone ? (
        <CheckIcon size={getIconSize()} weight={iconWeight} />
      ) : (
        LeftIcon && <LeftIcon size={getIconSize()} weight={iconWeight} />
      )}
      <span className="button-content">{children}</span>
      {!isLoading && !isDone && RightIcon && <RightIcon size={getIconSize()} weight={iconWeight} />}
    </button>
  );
}; 