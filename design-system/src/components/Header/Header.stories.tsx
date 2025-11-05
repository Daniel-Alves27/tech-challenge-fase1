import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  component: Header,
  parameters: {layout: 'fullscream'}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Header />
  )
};