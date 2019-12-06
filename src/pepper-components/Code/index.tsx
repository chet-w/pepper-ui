import React from 'react'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const StyledInlineCode = styled.code`
  background: ${props => `${props.theme.palette.primary}22`};
  padding: 2px 4px;
  color: ${props => props.theme.palette.primary};
`

type CodeTypes = 'inline' | 'block'

interface CodeProps {
  type: CodeTypes
  children: any
}

const Code: React.FC<CodeProps> = ({ type, children }) => {
  return type === 'inline' ? (
    <StyledInlineCode>{children}</StyledInlineCode>
  ) : (
    <SyntaxHighlighter>{children}</SyntaxHighlighter>
  )
}

export default Code
