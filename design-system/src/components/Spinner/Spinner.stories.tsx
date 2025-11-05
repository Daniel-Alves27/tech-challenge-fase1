// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta = {
  component: Spinner,
  parameters: {layout: 'centered'},
  tags: ['autodocs']
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnersVariants: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Spinner colorSpinner={'text-primary'}></Spinner>
      <Spinner colorSpinner={'text-warning'}></Spinner>
      <Spinner colorSpinner={'text-light'}></Spinner>
      <Spinner colorSpinner={'text-dark'}></Spinner>
    </div>
    
  )
};