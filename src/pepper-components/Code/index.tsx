import React from 'react'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const StyledInlineCode = styled.code`
  background: ${props => `${props.theme.palette.primary}22`};
  padding: 2px 4px;
  color: ${props => props.theme.palette.primary};
`

interface CodeInlineProps {
  children: any
}

interface CodeBlockProps extends CodeInlineProps {
  lang: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ lang, children }) => (
  <SyntaxHighlighter language={lang} style={theme}>
    {children}
  </SyntaxHighlighter>
)

const CodeInline: React.FC<CodeInlineProps> = ({ children }) => (
  <StyledInlineCode>{children}</StyledInlineCode>
)

export { CodeBlock, CodeInline }
