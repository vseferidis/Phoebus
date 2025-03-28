import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    activeIcon: {
      control: 'select',
      options: ['Check', 'CheckCircle', 'CheckSquare'],
    },
    inactiveIcon: {
      control: 'select',
      options: ['X', 'XCircle', 'XSquare'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enable notifications',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Enable notifications',
    helperText: 'Receive notifications about updates and new features',
  },
};

export const WithError: Story = {
  args: {
    label: 'Enable notifications',
    error: 'Please enable notifications to continue',
    helperText: 'Receive notifications about updates and new features',
  },
};

export const Loading: Story = {
  args: {
    label: 'Enable notifications',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Enable notifications',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Enable notifications',
    required: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Switch
        size="small"
        label="Small Switch"
      />
      <Switch
        size="medium"
        label="Medium Switch"
      />
      <Switch
        size="large"
        label="Large Switch"
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  args: {
    label: 'Enable notifications',
    activeIcon: 'CheckCircle',
    inactiveIcon: 'XCircle',
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: 'Enable email notifications',
    helperText: 'You will receive updates about your account',
  },
}; 