import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
    selectedIcon: {
      control: 'select',
      options: ['CircleWavyCheck', 'CheckCircle', 'CheckSquare'],
    },
    unselectedIcon: {
      control: 'select',
      options: ['Circle', 'CircleHalf', 'Square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    helperText: 'Select an option to continue',
  },
};

export const WithError: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    error: 'Please select an option',
    helperText: 'Select an option to continue',
  },
};

export const Loading: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    required: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Radio
        size="small"
        label="Small Radio"
        name="radio-group"
      />
      <Radio
        size="medium"
        label="Medium Radio"
        name="radio-group"
      />
      <Radio
        size="large"
        label="Large Radio"
        name="radio-group"
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
    selectedIcon: 'CheckCircle',
    unselectedIcon: 'CircleHalf',
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio
        label="Option 1"
        name="radio-group"
        value="1"
      />
      <Radio
        label="Option 2"
        name="radio-group"
        value="2"
      />
      <Radio
        label="Option 3"
        name="radio-group"
        value="3"
      />
      <Radio
        label="Option 4"
        name="radio-group"
        value="4"
      />
    </div>
  ),
};

export const WithCustomLabel: Story = {
  args: {
    label: 'I agree to receive marketing emails',
    name: 'radio-group',
    helperText: 'You can unsubscribe at any time',
  },
}; 