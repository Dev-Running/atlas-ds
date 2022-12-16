import { css } from '../stitches'
export const HeaderCSS = css({
  '@2xl': {
    display: 'flex',
    position: 'sticky',
    top: '0px',
    zIndex: '$header',
    backgroundColor: '$dark',
    borderBottom: '1px solid rgb(63 63 70 / 0.2)',
    width: '100%',
    height: '5rem',
    justifyContent: 'center',
    gap: '12.5rem',
  },
})

export const HeaderBox1CSS = css({
  '@2xl': {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    gap: '23.375rem',
  },
})

export const HeaderUlCSS = css({
  '@2xl': {
    display: 'flex',
    gap: '2.45rem',
    fontWeight: '$normal',
  },
})

export const HeaderBox2CSS = css({
  '@2xl': {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    gap: '2rem',
  },
})
