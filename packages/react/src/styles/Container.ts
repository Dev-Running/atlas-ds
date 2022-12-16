import { css } from '../stitches'
export const ContainerCSS = css({
  gap: '$$gap',
  variants: {
    clip: {
      true: {
        backgroundClip: 'text',
        '--webkit-background-clip': 'text',
      },
    },
    size: {
      full: {
        width: '100%',
        height: '100%',
      },
      screen: {
        width: '100vw',
        height: '100vh',
      },
      auto: {
        width: 'auto',
        height: 'auto',
      },
    },
    type: {
      flex: {
        display: 'flex',
      },
      Column: {
        display: 'flex',
        flexDirection: 'column',
      },
      CenterXY: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ColumnCenterXY: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      CenterX: {
        display: 'flex',
        justifyContent: 'center',
      },
      CenterY: {
        display: 'flex',
        alignItems: 'center',
      },
      ColumnCenterX: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      ColumnCenterY: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  },
  defaultVariants: {
    size: 'auto',
  },
})
