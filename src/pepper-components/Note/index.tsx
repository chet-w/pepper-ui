import * as React from 'react'
import styled from 'styled-components'
import Heading from '../Headings'

const BaseNote = styled.blockquote`
  padding: 20px;
  background: ${(props: BaseNoteProps) => props.base};
  border-left: solid 3px;
  border-left-color: ${(props: BaseNoteProps) => props.accent};
  margin-left: 0;
  margin-right: 0;
  min-width: 300px;
  border-radius: 0 5px 5px 0;
`

type NoteTypeTypes = 'info' | 'success' | 'warning' | 'danger'

interface NoteProps {
  type: NoteTypeTypes
  heading: string
  children?: any
}

interface BaseNoteProps {
  type: NoteTypeTypes
  base: string
  accent: string
  children?: any
}

const colorMappings = [
  {
    type: 'info',
    base: 'rgb(235, 236, 249)',
    accent: 'rgba(58, 65, 198)',
  },
  {
    type: 'success',
    base: 'rgb(231, 255, 208)',
    accent: 'rgb(153, 230, 94)',
  },
  {
    type: 'danger',
    base: 'rgb(255, 233, 232)',
    accent: 'rgb(255, 121, 116)',
  },
  {
    type: 'warning',
    base: 'rgb(255, 247, 208)',
    accent: 'rgb(255, 217, 90)',
  },
]

const Note: React.FC<NoteProps> = props => {
  const { type, heading, children } = props

  const colors = colorMappings.find(item => item.type === type)

  return (
    <BaseNote {...colors}>
      <Heading level="note" id="note">
        {heading}
      </Heading>
      {children}
    </BaseNote>
  )
}

export default Note
