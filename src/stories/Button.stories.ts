import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Click Me',
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Click Me',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Click Me',
    variant: 'link',
  },
};

export const Outline: Story = {
  args: {
    children: 'Click Me',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click Me',
    variant: 'secondary',
  },
};
