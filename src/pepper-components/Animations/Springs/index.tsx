import React, { ReactComponentElement } from 'react'
import { useSpring } from 'react-spring'

interface Props {
  Component: any
}

const WithFadeInAnimation: React.FC<Props> = ({ Component }) => {
  return <Component />
}

export default WithFadeInAnimation
