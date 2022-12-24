import { css } from 'styled-components';

export const colors = {
  defaults: {
    white: '#fff',
    black: '#000',
  },
  theme: {
    dark: {
      b0: '#FAFAFA',
      b1: '#F5F5FF',
      b2: '#D0D0DA',
      b3: '#A9A9B7',
      b4: '#8A8A98',
      b5: '#70707C',
      b6: '#5B5B65',
      b7: '#40404A',
      b8: '#2C2C35',
      b9: '#1E1E24',
      b10: '#0F0F13',
    },
    light: {
      w0: '#F2F3F7',
      w1: '#E2E2EA',
      w2: '#C6CBD9',
      w3: '#9A9AAF',
      w4: '#7E7E8F',
      w5: '#656575',
      w6: '#535362',
      w7: '#2E2E3A',
      w8: '#262631',
      w9: '#16161E',
      w10: '#07070C',
    },
  },
  accents: {
    blue: {
      azure: '#0062FF',
      persian: '#4807EA',
      frosty: '#06D7F6',
      aquamarine: '#3DD598',

    },
    green: {
      sea: '#15FFAB',
      spring: '#62F783',
      verdepom: '#24CA49',
    },
    orange: {
      mango: '#FF8743',
      amber: '#FE7E07',
      shiny: '#FFB443',
      spunky: '#FF7A2F',
    },
    yellow: {
      zinc: '#FFF736',
    },
    purple: {
      amethyst: '#A162F7',
      magenta: '#E80FE9',
    },
    red: {
      strawberry: '#DB3031',
      alizarin: '#FD4438',
    },
    gray: {
      thistle: '#C2B7CD',
    },
    pink: {
      crayola: '#FF5CAA',
    },
  },
};
export const fonts = {
  styles: {
    weight: {
      md: '500',
      lg: '600',
      xl: '700',
    },
    size: {
      bx: 64,
      bl: 48,
      bm: 40,
      bs: 32,
      xxl: 24,
      xl: 20,
      lg: 18,
      md: 15,
      sm: 14,
      xs: 13,
      xxs: 12,
    },
    lineHeight: {
      xxl: 64,
      xl: 48,
      lg: 32,
      md: 24,
      sm: 16,
      xs: 12,
    },
    letterSpacing: {
      lg: '-0.03em',
      md: '-0.02em',
      sm: '-0.015em',
      xs: '-0.01em',
    },
  },
  h1: css`
    font-weight: 600;
    font-size: 64px;
    line-height: 64px;
    letter-spacing: -0.03em;
  `,
  h2: css`
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.03em;
  `,
  h3: css`
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.02em;
  `,
  h4: css`
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.03em;
  `,
  h5: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
  `,
  text: css`
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;`,
  textMedium: css`
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.015em;
  `,
  miniText: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  base: css`
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  baseBold: css`
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  miniBase: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  title: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.02em;
  `,
  titleMedium: css`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.02em;
  `,
  titleMobile: css`
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.02em;
  `,
  miniTitle: css`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  `,
  button: css`
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  miniButton: css`
    font-weight: 700;
    font-size: 13px;
    line-height: 24px;
    letter-spacing: -0.01em;
  `,
  description: css`
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
  `,
  descriptionMedium: css`
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
  `,
  descriptionBold: css`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.01em;
  `,
  miniDescription: css`
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.01em;
  `,
};