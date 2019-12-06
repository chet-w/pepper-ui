import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import Note from '../../pepper-components/Note'

interface Props {}

const NotesStyles: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Styles"
      description="Notes are a modern way of adding supplimentary info to an article or section of text that stands out as extra optional information."
      demoComponents={[
        <Note type="info" heading="Hey!">
          Information note
        </Note>,
        <Note type="success" heading="Success!">
          Success note
        </Note>,
        <Note type="danger" heading="Uh oh">
          Danger note
        </Note>,
        <Note type="warning" heading="Heads up!">
          Warning note
        </Note>,
      ]}
      code={`import { Note } from 'pepper-ui'

const MyComponent = () => (
  <div>
    <Note
     type="info"
     heading="Hey!"
    >
     I just made a note.
    </Note>
  </div>
)
            `}
    />
  )
}

export default NotesStyles
