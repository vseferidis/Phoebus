import React, { forwardRef } from 'react';
import { IconProps, Icon } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Checkbox.css';

type PhosphorIconName = keyof typeof PhosphorIcons;
type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Helper text below the checkbox
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Name of the Phosphor icon to show when checked
   */
  checkedIcon?: PhosphorIconName;
  /**
   * Name of the Phosphor icon to show when unchecked
   */
  uncheckedIcon?: PhosphorIconName;
  /**
   * Size of the checkbox
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the checkbox is in a loading state
   */
  loading?: boolean;
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * Whether the checkbox is required
   */
  required?: boolean;
  /**
   * Whether the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      checkedIcon = 'Check',
      uncheckedIcon = 'Square',
      size = 'medium',
      loading = false,
      disabled = false,
      required = false,
      indeterminate = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const CheckedIcon = PhosphorIcons[checkedIcon] as PhosphorIcon;
    const UncheckedIcon = PhosphorIcons[uncheckedIcon] as PhosphorIcon;
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
      <div className={`checkbox-wrapper ${className}`}>
        <div className="checkbox-container">
          <div className={`checkbox-input-container ${size} ${error ? 'error' : ''} ${loading ? 'loading' : ''}`}>
            {loading ? (
              <SpinnerIcon size={getIconSize()} weight="duotone" className="spinning" />
            ) : props.checked ? (
              <CheckedIcon size={getIconSize()} weight="duotone" />
            ) : indeterminate ? (
              <UncheckedIcon size={getIconSize()} weight="duotone" className="indeterminate" />
            ) : (
              <UncheckedIcon size={getIconSize()} weight="duotone" />
            )}
            <input
              ref={ref}
              type="checkbox"
              className="checkbox-input"
              disabled={disabled || loading}
              {...props}
            />
          </div>
          {label && (
            <label className="checkbox-label">
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