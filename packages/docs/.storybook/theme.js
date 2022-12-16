import { colors } from '@devrunning/tokens'
import { create } from '@storybook/theming'

export const theme = create({
  base: 'dark',

  colorSecondary: colors.dr,

  appBg: colors['dark-100'],
  appContentBg: colors.dark,
  appBorderColor: colors['neutral-700'],

  textColor: colors['neutral-400'],

  // Toolbar default and active colors
  barTextColor: colors['neutral-400'],
  barSelectedColor: colors['neutral-100'],
  barBg: colors['dark-300'],
  inputBg: '#1b1a1f',
  inputTextColor: '#fff',
  brandTitle: 'Atlas',

  colorPrimary: colors['neutral-700'],
  //   brandImage:
  //     'https://lh3.googleusercontent.com/pw/AL9nZEWPTkw5IlNB3zncJ6FpJ6PnSfoVGM5E5kyT54XhzJDUiVUqVq3Vti1j7moUtZyYdtX0AMqEEYBkZ4aK6xZFgosvr12sYfKuKn_CotrbOQxLDNosfkvjahRP47Qt1u2Rh6v7WrOzdo34spVSUZOyaZU=w48-h46-no?authuser=0',
  //   brandUrl: 'url do meu app',
})
