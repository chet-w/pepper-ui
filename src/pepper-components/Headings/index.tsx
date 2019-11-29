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

const StyledLink = styled.a`
  color: #9296e0;
  margin-right: 0.25em;

  &::after {
    content: none;
  }
`

const Heading = (props: HeadingProps) => {
  const { level, id, children } = props

  const headingContent = (
    <>
      <StyledLink href={`#${id}`} title={id}>
        #
      </StyledLink>
      {children}
    </>
  )

  return level === 'page' ? (
    <H1 id={id}>{headingContent}</H1>
  ) : level === 'section' ? (
    <H2 id={id}>{headingContent}</H2>
  ) : level === 'subsection' ? (
    <H3 id={id}>{headingContent}</H3>
  ) : level === 'note' ? (
    <H4 id={id}>{headingContent}</H4>
  ) : level === 'minor' ? (
    <H5 id={id}>{headingContent}</H5>
  ) : (
    <H6 id={id}>{headingContent}</H6>
  )
}

export default Heading
