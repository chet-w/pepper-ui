import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import Heading from '../../pepper-components/Headings'

interface Props {}

const HeadingStyles: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Styles"
      description="Add some minor style changes to your headings to add a bit more flare 🕺."
      demoComponents={[
        <Heading level="subsection" id="basic">
          Basic
        </Heading>,
        <Heading level="subsection" id="underlined" underlined>
          Underlined
        </Heading>,
      ]}
      demoDisplayStyle="column"
      code={`ss`}
    />
  )
}

export default HeadingStyles
