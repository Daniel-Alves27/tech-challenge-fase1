import type { Meta, StoryObj } from '@storybook/react';
 
import { Text } from './Text';
 
const meta = {
  component: Text,
  parameters: { layout: 'centered' },
 
  tags: ['autodocs']
} satisfies Meta<typeof Text>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const TextSize: Story = {
  render: () => (
    <div>
      <Text tags={'h1'} size={'fs-1'}>h1 - 38px</Text>
      <Text tags={'h2'} size={'fs-2'}>h2 - 31px</Text>
      <Text tags={'h3'} size={'fs-3'}>h3 - 27px</Text>
      <Text tags={'h4'} size={'fs-4'}>h4 - 23px</Text>
      <Text tags={'h5'} size={'fs-5'}>h5 - 20px</Text>
      <Text tags={'h6'} size={'fs-6'}>h6 - 16px</Text>
      <Text tags={'p'} size={'fs-6'}>p - 16px</Text>
    </div>
  )
}

export const TextTransform: Story = {
  render: () => (
    <div>
      <Text transform={'text-uppercase'}> text uppercase</Text>
      <Text transform={'text-lowercase'}> text lowercase</Text>
      <Text transform={'text-capitalize'}> text capitalize</Text>
    </div>
    
  )
}

export const TextWeight: Story = {
  render: () => (
    <div>
      <Text weight={'fw-bold'}> text bold</Text>
      <Text weight={'fw-semibold'}> text semibold</Text>
      <Text weight={'fw-medium'}> text medium</Text>
      <Text weight={'fw-normal'}> text normal</Text>
      <Text weight={'fw-light'}> text light</Text>
    </div>
  )
}

export const LineHeight: Story = {
  render: () => (
    <div>
      <h2>line height 1</h2>
      <Text tags={'p'} lineHeight={'lh-1'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <h2>line height 1.25</h2>
      <Text tags={'p'} lineHeight={'lh-sm'}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <h2>line height 1.5</h2>
      <Text tags={'p'} lineHeight={'lh-base'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <h2>line height 2</h2>
      <Text tags={'p'} lineHeight={'lh-lg'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </div>
  )
} 