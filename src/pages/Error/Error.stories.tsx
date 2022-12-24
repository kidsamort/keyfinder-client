import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorComponentProps } from './Error.props';
import Error from './Error';

export default {
  title: 'Page/Error',
  component: Error,
  parameters: {
    themes: {
      Error: 'dark',
    },
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args: ErrorComponentProps) => (
  <Error {...args} />
);

export const ErrorDefault = Template.bind({});

ErrorDefault.args = {};