import { VariantProps } from '@stitches/react'
import React from 'react'
import { styled } from '../../stitches'
import { HeadingCSS } from '../../styles'
const H1 = styled('h1', HeadingCSS)
const H2 = styled('h2', HeadingCSS)
const H3 = styled('h3', HeadingCSS)
const H4 = styled('h4', HeadingCSS)
const H5 = styled('h5', HeadingCSS)
const H6 = styled('h6', HeadingCSS)

interface Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeadingCSS> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const Heading = ({ as, children, ...props }: Props) => {
  if (as === 'h1') return <H1 {...props}>{children}</H1>
  if (as === 'h2') return <H2 {...props}>{children}</H2>
  if (as === 'h3') return <H3 {...props}>{children}</H3>
  if (as === 'h4') return <H4 {...props}>{children}</H4>
  if (as === 'h5') return <H5 {...props}>{children}</H5>
  if (as === 'h6') return <H6 {...props}>{children}</H6>
  return <H1 {...props}>{children}</H1>
}
