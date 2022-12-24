import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize}
  * {
    font-family: Inter, 'Arial', sans-serif;
    transition: background 0.3s ease-in;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  @media (prefers-color-scheme: dark) {
    html {
    color-scheme: dark;
  }
  }
`;
