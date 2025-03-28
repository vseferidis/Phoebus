import React, { forwardRef } from 'react';
import { IconProps, Icon } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Select.css';

type PhosphorIconName = keyof typeof PhosphorIcons;
type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Label for the select
   */
  label?: string;
  /**
   * Helper text below the select
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Name of the Phosphor icon to show on the left side
   */
  leftIcon?: PhosphorIconName;
  /**
   * Name of the Phosphor icon to show on the right side
   */
  rightIcon?: PhosphorIconName;
  /**
   * Size of the select
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the select is in a loading state
   */
  loading?: boolean;
  /**
   * Whether the select is disabled
   */
  disabled?: boolean;
  /**
   * Whether the select is required
   */
  required?: boolean;
  /**
   * Options for the select
   */
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      size = 'medium',
      loading = false,
      disabled = false,
      required = false,
      options,
      className = '',
      ...props
    },
    ref
  ) => {
    const LeftIcon = leftIcon ? (PhosphorIcons[leftIcon] as PhosphorIcon) : null;
    const RightIcon = rightIcon ? (PhosphorIcons[rightIcon] as PhosphorIcon) : null;
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
      <div className={`select-wrapper ${className}`}>
        {label && (
          <label className="select-label">
            {label}
            {required && <span className="required">*</span>}
          </label>
        )}
        <div className={`select-container ${size} ${error ? 'error' : ''} ${loading ? 'loading' : ''}`}>
          {LeftIcon && <LeftIcon size={getIconSize()} weight="duotone" />}
          <select
            ref={ref}
            className="select"
            disabled={disabled || loading}
            {...props}
          >
            <option value="" disabled selected>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {loading ? (
            <SpinnerIcon size={getIconSize()} weight="duotone" className="spinning" />
          ) : (
            RightIcon && <RightIcon size={getIconSize()} weight="duotone" />
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