import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { User, Globe, CurrencyDollar, Phone, EnvelopeSimple, Lock, MagnifyingGlass } from '@phosphor-icons/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    loading: { control: 'boolean' },
    withRadio: { control: 'boolean' },
    hint: { control: 'text' },
    clearable: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    leftIcon: {
      control: 'select',
      options: ['User', 'EnvelopeSimple', 'Lock', 'MagnifyingGlass'],
    },
    rightIcon: {
      control: 'select',
      options: ['Eye', 'EyeSlash', 'Calendar', 'Clock'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithPreFieldIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    preField: <User className="icon" weight="regular" />,
  },
};

export const WithPreFieldText: Story = {
  args: {
    label: 'Website',
    placeholder: 'example.com',
    preField: 'https://',
  },
};

export const WithPreFieldFlag: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    preField: (
      <img
        src="https://flagcdn.com/w20/us.png"
        srcSet="https://flagcdn.com/w40/us.png 2x"
        alt="US"
      />
    ),
  },
};

export const WithPreFieldCurrency: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    preField: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <CurrencyDollar className="icon" weight="regular" />
        <span>USD</span>
      </div>
    ),
  },
};

export const WithPreFieldAndIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    preField: <MagnifyingGlass className="icon" weight="regular" />,
    rightIcon: 'Clock',
  },
};

export const WithPreFieldAndError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    preField: <EnvelopeSimple className="icon" weight="regular" />,
    error: 'Please enter a valid email address',
    helperText: 'Please enter a valid email address',
  },
};

export const WithPreFieldAndLoading: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    preField: <User className="icon" weight="regular" />,
    loading: true,
  },
};

export const WithPreFieldAndDisabled: Story = {
  args: {
    label: 'Website',
    placeholder: 'example.com',
    preField: 'https://',
    disabled: true,
  },
};

export const WithPreFieldAndRequired: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    preField: <Phone className="icon" weight="regular" />,
    required: true,
  },
};

export const WithPreFieldAndHint: Story = {
  args: {
    label: 'Website',
    placeholder: 'example.com',
    preField: <Globe className="icon" weight="regular" />,
    hint: 'Required',
  },
};

export const WithPreFieldAndClear: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    preField: <User className="icon" weight="regular" />,
    clearable: true,
    value: 'John Doe',
  },
};

export const WithPreFieldSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
      <Input
        size="small"
        label="Small Input"
        placeholder="Small size"
        preField={<User className="icon" weight="regular" />}
      />
      <Input
        size="medium"
        label="Medium Input"
        placeholder="Medium size"
        preField={<User className="icon" weight="regular" />}
      />
      <Input
        size="large"
        label="Large Input"
        placeholder="Large size"
        preField={<User className="icon" weight="regular" />}
      />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Password must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email address',
    helperText: 'Please enter a valid email address',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: 'MagnifyingGlass',
    rightIcon: 'Clock',
  },
};

export const WithRadio: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    withRadio: true,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    hint: 'Required',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    clearable: true,
    value: 'John Doe',
  },
};

export const Loading: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Enter email',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
      <Input
        size="small"
        label="Small Input"
        placeholder="Small size"
        leftIcon="User"
      />
      <Input
        size="medium"
        label="Medium Input"
        placeholder="Medium size"
        leftIcon="User"
      />
      <Input
        size="large"
        label="Large Input"
        placeholder="Large size"
        leftIcon="User"
      />
    </div>
  ),
};

export const WithAllFeatures: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    withRadio: true,
    leftIcon: 'User',
    rightIcon: 'Check',
    hint: 'Required',
    clearable: true,
    value: 'John Doe',
    helperText: 'Enter your full name',
  },
};

export const WithChangeablePreField: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select country',
    preField: (
      <img
        src="https://flagcdn.com/w20/us.png"
        srcSet="https://flagcdn.com/w40/us.png 2x"
        alt="US"
      />
    ),
    preFieldChangeable: true,
    onPreFieldClick: () => console.log('Pre-field clicked'),
  },
};

export const WithChangeablePreFieldAndCurrency: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    preField: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <CurrencyDollar className="icon" weight="regular" />
        <span>USD</span>
      </div>
    ),
    preFieldChangeable: true,
    onPreFieldClick: () => console.log('Pre-field clicked'),
  },
};

export const WithChangeablePreFieldDisabled: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select country',
    preField: (
      <img
        src="https://flagcdn.com/w20/us.png"
        srcSet="https://flagcdn.com/w40/us.png 2x"
        alt="US"
      />
    ),
    preFieldChangeable: true,
    disabled: true,
    onPreFieldClick: () => console.log('Pre-field clicked'),
  },
}; 