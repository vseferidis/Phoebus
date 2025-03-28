import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    src: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150',
    alt: 'User Avatar',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    alt: 'JS',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    alt: 'JD',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    alt: 'JD',
    size: 'large',
  },
}; 