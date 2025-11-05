import type { Meta, StoryObj } from '@storybook/react';
 
import { Input } from './Input';
import { Grid } from 'lucide-react';
 
const meta = {
  component: Input,
  parameters: {layout: 'centered'},
  tags: ['autodoc']
} satisfies Meta<typeof Input>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const inputType: Story = {
  render: () => (
    <div>
      <Input inputType={'email'} id={'email'} label={'email address'} placeholder='name@example.com'/>
      <Input inputType={'password'} id={'password'} label={'password'}/>
      <Input inputType={'text'} id={'text'} label={'Text'} placeholder='Default Input'/>
    </div>
  )
};

export const inputSize: Story = {
  render: () => (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem'}}>
      <div>
        <Input inputType={'email'} size='lg' id={'email'} label={'email address'} placeholder='name@example.com'/>
        <Input inputType={'email'} id={'email'} label={'email address'} placeholder='name@example.com'/>
        <Input inputType={'email'} size='sm' id={'email'} label={'email address'} placeholder='name@example.com'/>
      </div>
      <div>
        <Input inputType={'password'} size='lg' id={'password'} label={'password'} placeholder={'enter your password'}/>
        <Input inputType={'password'} id={'password'} label={'password'} placeholder={'enter your password'}/>
        <Input inputType={'password'} size='sm' id={'password'} label={'password'} placeholder={'enter your password'}/>
      </div>
      <div>
        <Input inputType={'text'} size='lg' id={'text'} label={'Text'} placeholder='Default Input'/>
        <Input inputType={'text'} id={'text'} label={'Text'} placeholder='Default Input'/>
        <Input inputType={'text'} size='sm' id={'text'} label={'Text'} placeholder='Default Input'/>
      </div>
    </div>
  )
};