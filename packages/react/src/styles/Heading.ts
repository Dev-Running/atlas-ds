import { css } from '../stitches'
export const HeadingCSS = css({
  variants: {
    intent: {
      primary: {
        color: '$dr',
      },
      dark: {
        color: '$dark',
      },
      light: {
        color: '$neutral-200',
      },
    },
    case: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
    },
    size: {
      xs: {
        fontSize: '0.75rem',
      },
      sm: {
        fontSize: '0.875rem',
      },
      md: {
        fontSize: '1.25rem',
      },
      base: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.5rem',
      },
      XL: { fontSize: '3rem' },
      XXL: { fontSize: '6rem' },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      black: {
        fontWeight: '$black',
      },
    },
    clip: {
      true: {
        color: 'transparent',
        fill: 'transparent',
      },
    },
  },
  defaultVariants: {
    weight: 'bold',
    clip: false,
    intent: 'light',
  },
})
