import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
    leftIcon: {
      control: 'select',
      options: ['User', 'Envelope', 'MapPin', 'Building'],
    },
    rightIcon: {
      control: 'select',
      options: ['User', 'Envelope', 'MapPin', 'Building'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    options,
    helperText: 'Please select your country of residence',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options,
    error: 'Please select a country',
    helperText: 'Please select your country of residence',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Location',
    options,
    leftIcon: 'MapPin',
    rightIcon: 'Building',
  },
};

export const Loading: Story = {
  args: {
    label: 'Country',
    options,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options,
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Country',
    options,
    required: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
      <Select
        size="small"
        label="Small Select"
        options={options}
        leftIcon="User"
      />
      <Select
        size="medium"
        label="Medium Select"
        options={options}
        leftIcon="User"
      />
      <Select
        size="large"
        label="Large Select"
        options={options}
        leftIcon="User"
      />
    </div>
  ),
};

export const WithCustomOptions: Story = {
  args: {
    label: 'User Type',
    options: [
      { value: 'admin', label: 'Administrator' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
      { value: 'guest', label: 'Guest' },
    ],
    leftIcon: 'User',
    helperText: 'Select the user type for the new account',
  },
}; 