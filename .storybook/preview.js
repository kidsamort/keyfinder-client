import React from 'react';
import { themes } from '@storybook/theming';

import { DocsContainer } from './components/DocContainer';
import { GlobalStyles } from '../src/style/global.styled';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../src/style/theme.styled';
import { useDarkMode } from 'storybook-dark-mode';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? dark : light}>
      <GlobalStyles />
      <Story theme={useDarkMode() ? dark : light} />
    </ThemeProvider>
  ),
];
const customViewports = {
  kindleFire2: {
    name: 'iphone x',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
};

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    container: DocsContainer,
  },
  viewport: { viewports: customViewports },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    dark: { ...themes.dark },
  },
};