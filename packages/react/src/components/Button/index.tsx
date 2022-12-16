import { VariantProps } from '@stitches/react'
import React from 'react'
import { styled } from '../../stitches/index'
import { buttonCSS } from '../../styles/Button'
export const Button = styled('button', buttonCSS)
export interface ButtonProps
  extends React.ComponentProps<typeof Button>,
    VariantProps<typeof Button> {
  children: React.ReactNode
}
