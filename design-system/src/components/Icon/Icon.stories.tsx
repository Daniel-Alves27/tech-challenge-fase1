import type { Meta, StoryObj } from '@storybook/react';
 
import { Icon } from './Icon';
 
const meta = {
  component: Icon,
  tags: ['autodocs'],
  parameters: {layout: 'centered'}
} satisfies Meta<typeof Icon>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const House: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Icon variants='house' colors='success'></Icon>
      <Icon variants='house' colors='warning'></Icon>
      <Icon variants='house' colors='danger'></Icon>
      <Icon variants='house' colors='info'></Icon>
      <Icon variants='house' colors='dark'></Icon>
    </div>
  )
};

export const Pencil: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Icon variants='pencil' colors='success'></Icon>
      <Icon variants='pencil' colors='warning'></Icon>
      <Icon variants='pencil' colors='danger'></Icon>
      <Icon variants='pencil' colors='info'></Icon>
      <Icon variants='pencil' colors='dark'></Icon>
    </div>
  )
};

export const Trash: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Icon variants='trash' colors='success'></Icon>
      <Icon variants='trash' colors='warning'></Icon>
      <Icon variants='trash' colors='danger'></Icon>
      <Icon variants='trash' colors='info'></Icon>
      <Icon variants='trash' colors='dark'></Icon>
    </div>
  )
};

export const Eyes: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Icon variants='eye' colors='success'></Icon>
        <Icon variants='eye' colors='warning'></Icon>
        <Icon variants='eye' colors='danger'></Icon>
        <Icon variants='eye' colors='info'></Icon>
        <Icon variants='eye' colors='dark'></Icon>
      </div>
      
      <div style={{display: 'flex', gap: '1rem'}}>
        <Icon variants='eyeClosed' colors='success'></Icon>
        <Icon variants='eyeClosed' colors='warning'></Icon>
        <Icon variants='eyeClosed' colors='danger'></Icon>
        <Icon variants='eyeClosed' colors='info'></Icon>
        <Icon variants='eyeClosed' colors='dark'></Icon>
      </div>
    </div>
  )
};

export const Star: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Icon variants='star' colors='success'></Icon>
      <Icon variants='star' colors='warning'></Icon>
      <Icon variants='star' colors='danger'></Icon>
      <Icon variants='star' colors='info'></Icon>
      <Icon variants='star' colors='dark'></Icon>
    </div>
  )
};

export const Heart: Story = {
  render: () => (
    <div style={{display: 'flex', gap: '1rem'}}>
      <Icon variants='heart' colors='success'></Icon>
      <Icon variants='heart' colors='warning'></Icon>
      <Icon variants='heart' colors='danger'></Icon>
      <Icon variants='heart' colors='info'></Icon>
      <Icon variants='heart' colors='dark'></Icon>
    </div>
  )
};