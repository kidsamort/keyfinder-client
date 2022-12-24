import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthComponentProps } from './Auth.props';
import Auth from './Auth';

export default {
  title: 'Page/Auth',
  component: Auth,
  parameters: {
    themes: {
      Auth: 'dark',
    },
  },
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = (args: AuthComponentProps) => (
  <Auth {...args} />
);

export const AuthDefault = Template.bind({});

AuthDefault.args = {};