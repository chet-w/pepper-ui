import * as React from 'react'
import styled from 'styled-components'

interface StyledHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string
  underlined?: boolean
  linked?: boolean
}

interface HeadingProps extends StyledHeadingProps {
  level: HeadingLevels
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

  & ::after {
    content: ${(props: StyledHeadingProps) =>
      props.underlined ? '""' : 'none'};
    position: absolute;
    top: 101%;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }
`
const H2 = styled.h2`
  font-size: 24px;
  position: relative;

  & ::after {
    content: ${(props: StyledHeadingProps) =>
      props.underlined ? '""' : 'none'};
    position: absolute;
    top: 101%;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }
`

const H3 = styled.h3`
  font-size: 20px;
  position: relative;

  & ::after {
    content: ${(props: StyledHeadingProps) =>
      props.underlined ? '""' : 'none'};
    position: absolute;
    top: 101%;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }
`
const H4 = styled.h4`
  font-size: 18px;
  position: relative;

  & ::after {
    content: ${(props: StyledHeadingProps) =>
      props.underlined ? '""' : 'none'};
    position: absolute;
    top: 101%;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }
`
const H5 = styled.h5`
  font-size: 16px;
  position: relative;

  & ::after {
    content: ${(props: StyledHeadingProps) =>
      props.underlined ? '""' : 'none'};
    position: absolute;
    top: 101%;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }
`
const H6 = styled.h6`
  font-size: 14px;
  position: relative;

  & ::after {
    content: ${(props: StyledHeadingProps) =>
      props.underlined ? '""' : 'none'};
    position: absolute;
    top: 101%;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }
`

const StyledLink = styled.a`
  color: #9296e0;
  margin-right: 0.25em;

  &::after {
    content: none;
  }
`

const Heading = (props: HeadingProps) => {
  const { level, id, linked, underlined, children } = props

  const headingContent = (
    <>
      {linked && (
        <StyledLink href={`#${id}`} title={id}>
          #
        </StyledLink>
      )}
      {children}
    </>
  )

  return level === 'page' ? (
    <H1 linked={linked} underlined={underlined} id={id}>
      {headingContent}
    </H1>
  ) : level === 'section' ? (
    <H2 linked={linked} underlined={underlined} id={id}>
      {headingContent}
    </H2>
  ) : level === 'subsection' ? (
    <H3 linked={linked} underlined={underlined} id={id}>
      {headingContent}
    </H3>
  ) : level === 'note' ? (
    <H4 linked={linked} underlined={underlined} id={id}>
      {headingContent}
    </H4>
  ) : level === 'minor' ? (
    <H5 linked={linked} underlined={underlined} id={id}>
      {headingContent}
    </H5>
  ) : (
    <H6 linked={linked} underlined={underlined} id={id}>
      {headingContent}
    </H6>
  )
}

export default Heading
