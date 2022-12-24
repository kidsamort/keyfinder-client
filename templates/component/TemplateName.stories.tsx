import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TemplateNameComponentProps } from './TemplateName.props';
import TemplateName from './TemplateName';

export default {
  title: 'Category/TemplateName',
  component: TemplateName,
  parameters: {
    themes: {
      TemplateName: 'dark',
    },
  },
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args: TemplateNameComponentProps) => (
  <TemplateName {...args} />
);

export const TemplateNameDefault = Template.bind({});

TemplateNameDefault.args = {};