import React, { forwardRef } from 'react';
import { IconProps, Icon } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Switch.css';

type PhosphorIconName = keyof typeof PhosphorIcons;
type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the switch
   */
  label?: string;
  /**
   * Helper text below the switch
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Name of the Phosphor icon to show when active
   */
  activeIcon?: PhosphorIconName;
  /**
   * Name of the Phosphor icon to show when inactive
   */
  inactiveIcon?: PhosphorIconName;
  /**
   * Size of the switch
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the switch is in a loading state
   */
  loading?: boolean;
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Whether the switch is required
   */
  required?: boolean;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      helperText,
      error,
      activeIcon = 'Check',
      inactiveIcon = 'X',
      size = 'medium',
      loading = false,
      disabled = false,
      required = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const ActiveIcon = PhosphorIcons[activeIcon] as PhosphorIcon;
    const InactiveIcon = PhosphorIcons[inactiveIcon] as PhosphorIcon;
    const SpinnerIcon = PhosphorIcons.Spinner as PhosphorIcon;

    const getIconSize = () => {
      switch (size) {
        case 'small':
          return 12;
        case 'medium':
          return 14;
        case 'large':
          return 16;
        default:
          return 14;
      }
    };

    return (
      <div className={`switch-wrapper ${className}`}>
        <div className="switch-container">
          <div className={`switch-input-container ${size} ${error ? 'error' : ''} ${loading ? 'loading' : ''}`}>
            <input
              ref={ref}
              type="checkbox"
              className="switch-input"
              disabled={disabled || loading}
              {...props}
            />
            <div className="switch-track">
              {loading ? (
                <SpinnerIcon size={getIconSize()} weight="duotone" className="spinning" />
              ) : props.checked ? (
                <ActiveIcon size={getIconSize()} weight="duotone" />
              ) : (
                <InactiveIcon size={getIconSize()} weight="duotone" />
              )}
            </div>
          </div>
          {label && (
            <label className="switch-label">
              {label}
              {required && <span className="required">*</span>}
            </label>
          )}
        </div>
        {(helperText || error) && (
          <span className={`helper-text ${error ? 'error' : ''}`}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
); 