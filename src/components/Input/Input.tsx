import React, { forwardRef } from 'react';
import { IconProps, Icon } from '@phosphor-icons/react';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Input.css';

type PhosphorIconName = keyof typeof PhosphorIcons;
type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text below the input
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
   * Size of the input
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the input is in a loading state
   */
  loading?: boolean;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is required
   */
  required?: boolean;
  /**
   * Whether to show a radio button on the left
   */
  withRadio?: boolean;
  /**
   * Hint text to show on the right side of the input
   */
  hint?: string;
  /**
   * Whether to show a clear button
   */
  clearable?: boolean;
  /**
   * Callback when the clear button is clicked
   */
  onClear?: () => void;
  /**
   * Pre-field content to render before the input
   */
  preField?: React.ReactNode;
  /**
   * Whether the pre-field is clickable and can be changed
   */
  preFieldChangeable?: boolean;
  /**
   * Callback when the pre-field is clicked
   */
  onPreFieldClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
      withRadio = false,
      hint,
      clearable = false,
      onClear,
      preField,
      preFieldChangeable = false,
      onPreFieldClick,
      className = '',
      value,
      ...props
    },
    ref
  ) => {
    const LeftIcon = leftIcon ? (PhosphorIcons[leftIcon] as PhosphorIcon) : null;
    const RightIcon = rightIcon ? (PhosphorIcons[rightIcon] as PhosphorIcon) : null;
    const SpinnerIcon = PhosphorIcons.Spinner as PhosphorIcon;
    const XIcon = PhosphorIcons.X as PhosphorIcon;

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
      <div className={`input-wrapper ${className}`}>
        {label && (
          <label className="input-label">
            {label}
            {required && <span className="required">*</span>}
          </label>
        )}
        <div className={`input-container ${size} ${error ? 'error' : ''} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''} ${value ? 'filled' : ''}`}>
          {preField && (
            <div 
              className={`input-pre-field ${preFieldChangeable ? 'changeable' : ''}`}
              onClick={preFieldChangeable && !disabled ? onPreFieldClick : undefined}
              role={preFieldChangeable ? 'button' : undefined}
              tabIndex={preFieldChangeable ? 0 : undefined}
              onKeyDown={(e) => {
                if (preFieldChangeable && !disabled && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  onPreFieldClick?.();
                }
              }}
            >
              {preField}
            </div>
          )}
          {withRadio && (
            <div className="input-radio">
              <input type="radio" disabled={disabled} />
            </div>
          )}
          {LeftIcon && <LeftIcon size={getIconSize()} weight="duotone" />}
          <input
            ref={ref}
            className="input"
            disabled={disabled || loading}
            value={value}
            {...props}
          />
          {hint && <span className="input-hint">{hint}</span>}
          {loading ? (
            <SpinnerIcon size={getIconSize()} weight="duotone" className="spinning" />
          ) : clearable && value ? (
            <button
              type="button"
              className="input-clear"
              onClick={onClear}
              disabled={disabled}
            >
              <XIcon size={getIconSize()} weight="duotone" />
            </button>
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

Input.displayName = 'Input'; 