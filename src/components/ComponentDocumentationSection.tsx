import React, { ReactComponentElement } from 'react'
import styled from 'styled-components'

import { H2 } from '../pepper-components/Headings/index'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ComponentList = styled.ul`
  margin-left: 0;
`

const Component = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 20px;
`

interface Props {
  title: string
  description: string
  demoComponents: ReactComponentElement<any>[]
  code: string
}

const ComponentDocumentationSection: React.FC<Props> = props => {
  const { title, description, demoComponents, code } = props
  return (
    <article>
      <H2>{title}</H2>
      <p>{description}</p>
      <ComponentList>
        {demoComponents.map(cmp => (
          <Component>{cmp}</Component>
        ))}
      </ComponentList>
      <SyntaxHighlighter language="jsx" style={theme}>
        {code}
      </SyntaxHighlighter>
    </article>
  )
}

export default ComponentDocumentationSection
