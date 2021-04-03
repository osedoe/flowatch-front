import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<InputProps> = (args): JSX.Element => <Input {...args}/>;

export const Text = Template.bind({});
Text.args = {
  label: 'username',
  type: 'text'
};

export const Password = Template.bind({});
Password.args = {
  label: 'password',
  type: 'password'
};
