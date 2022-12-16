import { css } from '../stitches'
export const LinkButtonCSS = css({
  fontFamily: '$inter',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    intent: {
      primary: {
        textDecorationColor: '$dr',
        color: '$dr',
        '&:hover': {
          color: '$dr-100',
        },
      },
      light: {
        textDecorationColor: '$neutral-400',
        color: '$neutral-400',
        '&:hover': {
          color: '$neutral-200',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
      },
      base: {
        fontSize: '$base',
      },
      lg: {
        fontSize: '$lg',
      },
      '2xl': {
        fontSize: '$2xl',
      },
    },
    weight: {
      Light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    decoration: {
      true: {
        textDecoration: 'underline',
      },
      false: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'base',
    decoration: true,
  },
})
