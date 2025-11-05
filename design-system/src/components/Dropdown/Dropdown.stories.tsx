import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta = {
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        height: '350px'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { 
  args: {
    size: {paddingX: '7.7rem', paddingY: '.90rem', textSize: '1rem'}
  }
};

export const Mobile: Story = { 
  args: {
    size: {paddingX: '5.5rem', paddingY: '.90rem', textSize: '1rem'}
  }
};


