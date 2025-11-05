import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta = {
  component: Button,
  parameters: { layout: 'centered' },
 
  tags: ['autodocs']
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Primary: Story = {
  args: {
    variants: {bgColor: 'primary'},
    children: 'btn primary'
  },
};

export const secondary: Story = {
  args: {
    variants: {bgColor: 'secondary'},
    children: 'btn secondary'
  }
}

export const outlinePrimary: Story = {
  args: {
    variants: {outline: 'outline-primary'},
    children: 'outline primary'
  }
}

export const outlineSecondary: Story = {
  args: {
    variants: {outline: 'outline-secondary'},
    children: 'outline secondary'
  }
}

export const small: Story = {
  args: {
    variants: {bgColor: 'primary'},
    size: 'sm',
    children: 'btn small'
  }
}

export const large: Story = {
  args: {
    variants: {bgColor: 'primary'},
    size: 'lg',
    children: 'btn large'
  }
}

export const disable: Story = {
  args: {
    variants: {bgColor: 'primary'},
    children: 'btn disabled',
  },
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Button variants={{bgColor: 'primary'}} disabled>primary disabled</Button>
      <Button variants={{bgColor: 'secondary'}} disabled>secondary disabled</Button>
      <Button variants={{outline: 'outline-primary'}} disabled>secondary disabled</Button>
      <Button variants={{outline: 'outline-secondary'}} disabled>secondary disabled</Button>
    </div>
    
  )
}
