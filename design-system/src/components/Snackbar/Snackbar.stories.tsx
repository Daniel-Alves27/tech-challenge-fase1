import type { Meta, StoryObj } from '@storybook/react';
 
import { Snackbar } from './Snackbar';
 
const meta = {
  component: Snackbar,
  parameters: {layout: 'centered'},
  tags: ['autodocs']
} satisfies Meta<typeof Snackbar>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const SnackbarVariants: Story = {
  render: () => (
    <div>
      <Snackbar variants='success'></Snackbar>
      <Snackbar variants='danger'></Snackbar>
      <Snackbar variants='warning'></Snackbar>
      <Snackbar variants='info'></Snackbar>
      <Snackbar variants='dark'></Snackbar>
    </div>
  )
};