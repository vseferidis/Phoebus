import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'date',
    },
    minDate: {
      control: 'date',
    },
    maxDate: {
      control: 'date',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: new Date('2024-03-28'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithMinDate: Story = {
  args: {
    minDate: new Date('2024-03-28'),
  },
};

export const WithMaxDate: Story = {
  args: {
    maxDate: new Date('2024-12-31'),
  },
}; 