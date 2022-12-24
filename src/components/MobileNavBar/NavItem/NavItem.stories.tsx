import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavItemComponentProps } from './NavItem.props';
import NavItem from './NavItem';

export default {
  title: 'Category/NavItem',
  component: NavItem,
  parameters: {
    themes: {
      NavItem: 'dark',
    },
  },
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args: NavItemComponentProps) => (
  <NavItem {...args} />
);

export const NavItemDefault = Template.bind({});

NavItemDefault.args = {};