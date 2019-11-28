import styled from 'styled-components'
import { ITheme } from '../../styles/theme'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string
  level: HeadingLevels
  theme: ITheme
}

type HeadingLevels = "page" | "section" | "subsection" | "note" | "minor" | "very-minor"

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
  
  const {level, children} = props;
  return (
  level === "page" ? (
    <H1>{children}</H1>
  )
) 
  }

export { H1, H2, H3, H4, H5, H6 }
