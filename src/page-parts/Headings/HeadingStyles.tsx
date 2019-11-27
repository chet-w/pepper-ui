import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { H3 } from '../../pepper-components/Headings'

interface Props {}

const HeadingStyles: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Styles"
      description="Add some minor style changes to your headings to add a bit more flare 🕺."
      demoComponents={[<H3>Basic</H3>, <H3>Underlined</H3>, <H3>Heading</H3>]}
      demoDisplayStyle="column"
      code={`ss`}
    />
  )
}

export default HeadingStyles
