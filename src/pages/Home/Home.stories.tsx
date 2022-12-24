import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomeComponentProps } from './Home.props';
import Home from './Home';

export default {
  title: 'Page/Home',
  component: Home,
  parameters: {
    themes: {
      Home: 'dark',
    },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args: HomeComponentProps) => (
  <Home {...args} />
);

export const HomeDefault = Template.bind({});

HomeDefault.args = {};