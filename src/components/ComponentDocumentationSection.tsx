import React, { ReactComponentElement } from 'react'
import styled from 'styled-components'

import Heading from '../pepper-components/Headings/index'
import Note from '../pepper-components/Note/index'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReactNode } from 'react'

interface ComponentListProps {
  isColumn: boolean
}

const ComponentList = styled.ul`
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: ComponentListProps) =>
    props.isColumn ? 'column' : 'row'};
  align-items: ${(props: ComponentListProps) =>
    props.isColumn ? 'auto' : 'center'};
  justify-content: ${(props: ComponentListProps) =>
    props.isColumn ? 'center' : 'auto'};
`

const Component = styled.li`
  list-style: none;
  /* display: inline-block; */
  margin-right: 20px;
`

const Wrapper = styled.article`
  margin-bottom: 30px;
`

interface Props {
  title: string
  description: string
  demoComponents: ReactNode[]
  demoDisplayStyle?: DemoDisplayStyleTypes
  notes?: ReactNode[]
  code: string
}

type DemoDisplayStyleTypes = 'column' | 'row'

const ComponentDocumentationSection: React.FC<Props> = props => {
  const {
    title,
    description,
    demoComponents,
    demoDisplayStyle,
    notes,
    code,
  } = props
  return (
    <Wrapper>
      <Heading level="subsection" id={title}>
        {title}
      </Heading>
      <p>{description}</p>
      {notes &&
        notes.map(noteContent => (
          <Note heading="Keep in mind" type="info">
            {noteContent}
          </Note>
        ))}
      <ComponentList isColumn={demoDisplayStyle === 'column'}>
        {demoComponents.map(cmp => (
          <Component>{cmp}</Component>
        ))}
      </ComponentList>
      <SyntaxHighlighter language="jsx" style={theme}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  )
}

export default ComponentDocumentationSection
