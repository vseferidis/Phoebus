import React, { forwardRef } from 'react';
import { IconProps, Icon } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Radio.css';

type PhosphorIconName = keyof typeof PhosphorIcons;
type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the radio button
   */
  label?: string;
  /**
   * Helper text below the radio button
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Name of the Phosphor icon to show when selected
   */
  selectedIcon?: PhosphorIconName;
  /**
   * Name of the Phosphor icon to show when unselected
   */
  unselectedIcon?: PhosphorIconName;
  /**
   * Size of the radio button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the radio button is in a loading state
   */
  loading?: boolean;
  /**
   * Whether the radio button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the radio button is required
   */
  required?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      helperText,
      error,
      selectedIcon = 'CircleWavyCheck',
      unselectedIcon = 'Circle',
      size = 'medium',
      loading = false,
      disabled = false,
      required = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const SelectedIcon = PhosphorIcons[selectedIcon] as PhosphorIcon;
    const UnselectedIcon = PhosphorIcons[unselectedIcon] as PhosphorIcon;
    const SpinnerIcon = PhosphorIcons.Spinner as PhosphorIcon;

    const getIconSize = () => {
      switch (size) {
        case 'small':
          return 16;
        case 'medium':
          return 20;
        case 'large':
          return 24;
        default:
          return 20;
      }
    };

    return (
      <div className={`radio-wrapper ${className}`}>
        <div className="radio-container">
          <div className={`radio-input-container ${size} ${error ? 'error' : ''} ${loading ? 'loading' : ''}`}>
            {loading ? (
              <SpinnerIcon size={getIconSize()} weight="duotone" className="spinning" />
            ) : props.checked ? (
              <SelectedIcon size={getIconSize()} weight="duotone" />
            ) : (
              <UnselectedIcon size={getIconSize()} weight="duotone" />
            )}
            <input
              ref={ref}
              type="radio"
              className="radio-input"
              disabled={disabled || loading}
              {...props}
            />
          </div>
          {label && (
            <label className="radio-label">
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