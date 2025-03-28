import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loadable: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
    onLoadComplete: { action: 'load complete' },
    leftIcon: {
      control: 'text',
      description: 'Name of the Phosphor icon to show on the left side',
    },
    rightIcon: {
      control: 'text',
      description: 'Name of the Phosphor icon to show on the right side',
    },
    iconWeight: {
      control: 'select',
      options: ['duotone', 'regular', 'bold', 'fill', 'thin'],
      description: 'Weight of the icons',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

export const SmallWithIcon: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
    leftIcon: 'ArrowLeft',
    iconWeight: 'duotone',
  },
};

export const MediumWithIcon: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
    leftIcon: 'ArrowLeft',
    iconWeight: 'duotone',
  },
};

export const LargeWithIcon: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
    leftIcon: 'ArrowLeft',
    iconWeight: 'duotone',
  },
};

export const SmallIconOnly: Story = {
  args: {
    children: '',
    size: 'small',
    leftIcon: 'Heart',
    iconWeight: 'duotone',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Story />
        <div style={{ fontSize: '14px', color: '#666' }}>
          32x32px (14px text, 20x20px icon)
        </div>
      </div>
    ),
  ],
};

export const MediumIconOnly: Story = {
  args: {
    children: '',
    size: 'medium',
    leftIcon: 'Heart',
    iconWeight: 'duotone',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Story />
        <div style={{ fontSize: '14px', color: '#666' }}>
          40x40px (14px text, 24x24px icon)
        </div>
      </div>
    ),
  ],
};

export const LargeIconOnly: Story = {
  args: {
    children: '',
    size: 'large',
    leftIcon: 'Heart',
    iconWeight: 'duotone',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Story />
        <div style={{ fontSize: '14px', color: '#666' }}>
          48x48px (16px text, 32x32px icon)
        </div>
      </div>
    ),
  ],
};

export const WithBothIcons: Story = {
  args: {
    children: 'Button with Both Icons',
    leftIcon: 'Plus',
    rightIcon: 'Check',
    iconWeight: 'duotone',
  },
};

export const LoadableButton: Story = {
  args: {
    children: 'Loadable Button',
    leftIcon: 'Download',
    loadable: true,
    onLoadComplete: () => console.log('Loading complete'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}; 