import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PrivateComponentProps } from './Private.props';
import Private from './Private';

export default {
  title: 'Page/Private',
  component: Private,
  parameters: {
    themes: {
      Private: 'dark',
    },
  },
} as ComponentMeta<typeof Private>;

const Template: ComponentStory<typeof Private> = (args: PrivateComponentProps) => (
  <Private {...args} />
);

export const PrivateDefault = Template.bind({});

PrivateDefault.args = {};