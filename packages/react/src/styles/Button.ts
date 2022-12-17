import { css } from '../stitches'

export const buttonCSS = css({
  transition: 'all 0.2s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  fontFamily: '$inter',
  justifyContent: 'center',
  margin: 0,
  cursor: 'pointer',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  boxSizing: 'border-box',
  zIndex: 10,
  variants: {
    intent: {
      primary: {
        backgroundColor: '$dr',
        border: 'none',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$dr-100',
        },
      },
      dark: {
        backgroundColor: '$dark',
        border: 'none',
        color: '$neutral-300',
        '&:hover': {
          backgroundColor: '$dark-300',
        },
      },
      light: {
        border: 'none',
        backgroundColor: '$neutral-200',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$neutral-100',
        },
      },
      lightHomeStart: {
        backgroundColor: '$neutral-200',
        filter: 'drop-shadow(0px 0px 60px #dd247640)',
        color: '$dark',
        '&:hover': {
          backgroundColor: '$neutral-100',
        },
      },
      outlinedGradientHomeStart: {
        backgroundColor: '$dark',
        borderImage: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)2',
        // borderWidth: '2px',
        position: 'relative',
        backgroundImage: 'linear-gradient(90deg, $dark 0%, $dark 100%)',
        borderRadius: '3px',
        backgroundClip: 'border-box',
        // borderImageWidth: '2px',
        borderWidth: '2px',
        filter: 'drop-shadow(0px 0px 60px #ff512f40)',
        color: '$white',
        '&:hover': {
          backgroundColor: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)',
        },
        '&:before': {
          position: 'absolute',
          content: '',
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'opacity 0.2s linear',
          zIndex: -1,
          backgroundImage: 'linear-gradient(90deg, #FF512F 0%, #DD2476 100%)',
        },
        '&:hover:before': {
          opacity: 1,
          transition: 'opacity 0.2s linear',
        },
      },
    },
    size: {
      base: {
        padding: '0.688rem 1.25rem',
      },
      lg: {
        // padding: '0.75rem 1.769rem',
        minWidth: '12.25rem',
        minHeight: '2.8125rem',
        maxWidth: '12.25rem',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',    
      }
    },
    weight: {
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      'semi-bold': {
        fontWeight: '$semi-bold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    'text-size': {
      sm: {
        fontSize: '0.875rem',
      },
      md: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.125rem',
      },
    },
    rounded: {
      md: { borderRadius: '3px' },
    },
  },

  defaultVariants: {
    intent: 'primary',
    'text-size': 'md',
    weight: 'semi-bold',
    size: 'base',
    rounded: 'md',
  },
})
