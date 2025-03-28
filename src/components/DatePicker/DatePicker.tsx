import React, { useState } from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  /**
   * Selected date
   */
  value?: Date;
  /**
   * Callback fired when the date changes
   */
  onChange?: (date: Date) => void;
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  /**
   * Is the datepicker disabled?
   */
  disabled?: boolean;
  /**
   * Optional className for additional styling
   */
  className?: string;
}

export const DatePicker = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  className = '',
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`datepicker ${className}`}>
      <div
        className={`datepicker-input ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {selectedDate ? formatDate(selectedDate) : 'Select a date'}
      </div>
      {isOpen && !disabled && (
        <div className="datepicker-calendar">
          {/* Calendar implementation would go here */}
          <div className="datepicker-calendar-header">
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}; 