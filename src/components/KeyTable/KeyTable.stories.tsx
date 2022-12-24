import { ComponentMeta, ComponentStory } from '@storybook/react';
import { KeyTableComponentProps } from './KeyTable.props';
import KeyTable from './KeyTable';

export default {
  title: 'Category/KeyTable',
  component: KeyTable,
  parameters: {
    themes: {
      KeyTable: 'dark',
    },
  },
} as ComponentMeta<typeof KeyTable>;

const Template: ComponentStory<typeof KeyTable> = (args: KeyTableComponentProps) => (
  <KeyTable {...args} />
);

export const KeyTableDefault = Template.bind({});

KeyTableDefault.args = {};