import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    loading: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checkedIcon: {
      control: 'select',
      options: ['Check', 'CheckCircle', 'CheckSquare'],
    },
    uncheckedIcon: {
      control: 'select',
      options: ['Square', 'Circle', 'SquareHalf'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Accept terms and conditions',
    helperText: 'Please read the terms and conditions carefully',
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms and conditions',
    helperText: 'Please read the terms and conditions carefully',
  },
};

export const Loading: Story = {
  args: {
    label: 'Accept terms and conditions',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Accept terms and conditions',
    required: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Accept terms and conditions',
    indeterminate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Checkbox
        size="small"
        label="Small Checkbox"
      />
      <Checkbox
        size="medium"
        label="Medium Checkbox"
      />
      <Checkbox
        size="large"
        label="Large Checkbox"
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  args: {
    label: 'Accept terms and conditions',
    checkedIcon: 'CheckCircle',
    uncheckedIcon: 'Circle',
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: 'I agree to the Terms of Service and Privacy Policy',
    helperText: 'By checking this box, you agree to our terms and conditions',
  },
}; 