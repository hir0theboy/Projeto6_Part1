import React, { CSSProperties, ReactNode } from 'react'
import { HeaderBanner } from './HeaderStyle'

type HeaderProps = {
  children?: ReactNode
  style?: CSSProperties
}

export const Header = ({ children, style }: HeaderProps) => {
  return <HeaderBanner style={style}>{children}</HeaderBanner>
}
