import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import Code from '../../pepper-components/Code'

interface Props {}

const InlineCode: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Inline code"
      description="Put code samples anywhere, formatted and styled."
      demoComponents={[
        <p>
          Here is some <Code type="inline">inline code</Code>.
        </p>,
      ]}
      code={`ss`}
    />
  )
}

export default InlineCode
