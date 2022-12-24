import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreLoaderComponentProps } from './PreLoader.props';
import PreLoader from './PreLoader';

export default {
  title: 'Category/PreLoader',
  component: PreLoader,
  parameters: {
    themes: {
      PreLoader: 'dark',
    },
  },
} as ComponentMeta<typeof PreLoader>;

const Template: ComponentStory<typeof PreLoader> = (args: PreLoaderComponentProps) => (
  <PreLoader {...args} />
);

export const PreLoaderDefault = Template.bind({});

PreLoaderDefault.args = {};