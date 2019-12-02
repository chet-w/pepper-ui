import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import Heading from '../../pepper-components/Headings'

interface Props {}

const HeadingStyles: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Variations"
      description="Add some minor touches to the style of your headings, or add some functionality by adding a link."
      demoComponents={[
        <Heading level="subsection" id="basic">
          Basic
        </Heading>,
        <Heading level="subsection" id="underlined" underlined>
          Underlined
        </Heading>,
        <Heading level="subsection" id="linked" linked>
          Linked
        </Heading>,
      ]}
      demoDisplayStyle="row"
      code={`import { Heading } from 'pepper-ui'

const MyComponent = () => (
  <div>
    <Heading level='page' id='main-title' linked>
      My Main Linked Title
    </Heading>
    <Heading level='section' id='section' underlined>
      My Underlined Section Title
    </Heading>
  </div>
)
            `}
    />
  )
}

export default HeadingStyles
