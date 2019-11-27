import * as React from 'react'
import styled from 'styled-components'
import { H4 } from '../Headings'
import { Color } from 'csstype'

const BaseNote = styled.blockquote`
  padding: 20px;
  background: ${(props: BaseNoteProps) => props.base};
  border-left: solid 3px;
  border-left-color: ${(props: BaseNoteProps) => props.accent};
  margin-left: 0;
  margin-right: 0;
`

type NoteTypeTypes = 'info' | 'success' | 'warning' | 'danger'

interface NoteProps {
  type: NoteTypeTypes
  heading?: string
  children?: any
}

interface BaseNoteProps {
  type: NoteTypeTypes
  base: string
  accent: string
  children?: any
}

const colorMappings = [
  { type: 'info', base: 'rgb(235, 236, 249)', accent: 'rgba(58, 65, 198)' },
]

const Note: React.FC<NoteProps> = props => {
  const { type, heading, children } = props

  const colors = colorMappings.find(item => item.type === type)
  return (
    <BaseNote {...colors}>
      <H4>{heading || 'Hey! 👋'}</H4>
      {children}
    </BaseNote>
  )
}

export default Note
