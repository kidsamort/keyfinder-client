import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileNavBarComponentProps } from './MobileNavBar.props';
import MobileNavBar from './MobileNavBar';
import { MdOutlineDashboard, MdStopCircle } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

export default {
  title: 'Category/MobileNavBar',
  component: MobileNavBar,
  parameters: {
    themes: {
      MobileNavBar: 'dark',
    },
  },
} as ComponentMeta<typeof MobileNavBar>;

const Template: ComponentStory<typeof MobileNavBar> = (args: MobileNavBarComponentProps) => (
  <MobileNavBar {...args} />
);

export const MobileNavBarDefault = Template.bind({});

MobileNavBarDefault.args = {
  items: [
    {icon: <MdOutlineDashboard/>, title: 'Dashboard'},
    {icon: <MdStopCircle/>, title: 'Operations'},
    {icon: <IoAnalyticsSharp/>, title: 'Analytics'},
    {icon: <AiFillStar/>, title: 'Catalogue'},
  ]
};