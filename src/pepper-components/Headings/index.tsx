import * as React from 'react'
import styled from 'styled-components'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string
  level: HeadingLevels
  underlined?: boolean
}

type HeadingLevels =
  | 'page'
  | 'section'
  | 'subsection'
  | 'note'
  | 'minor'
  | 'very-minor'

const H1 = styled.h1`
  font-size: 36px;
  position: relative;
`
const H2 = styled.h2`
  font-size: 24px;
  position: relative;
`

const H3 = styled.h3`
  font-size: 20px;
  position: relative;
`
const H4 = styled.h4`
  font-size: 18px;
  position: relative;
`
const H5 = styled.h5`
  font-size: 16px;
  position: relative;
`
const H6 = styled.h6`
  font-size: 14px;
  position: relative;
`

const Heading = (props: HeadingProps) => {
  const { level, id, children } = props

  const headingContent = (
    <>
      <a href={`#${id}`} title={id}>
        #
      </a>
      {children}
    </>
  )

  return level === 'page' ? (
    <H1>{headingContent}</H1>
  ) : level === 'section' ? (
    <H2>{headingContent}</H2>
  ) : level === 'subsection' ? (
    <H3>{headingContent}</H3>
  ) : level === 'note' ? (
    <H4>{headingContent}</H4>
  ) : level === 'minor' ? (
    <H5>{headingContent}</H5>
  ) : (
    <H6>{headingContent}</H6>
  )
}

export default Heading
