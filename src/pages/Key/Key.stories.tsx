import { ComponentMeta, ComponentStory } from '@storybook/react';
import Key from './Key';

export default {
  title: 'Page/Key',
  component: Key,
  parameters: {
    themes: {
      Key: 'dark',
    },
  },
} as ComponentMeta<typeof Key>;

const Template: ComponentStory<typeof Key> = () => <Key />;

export const KeyDefault = Template.bind({});

KeyDefault.args = {};
