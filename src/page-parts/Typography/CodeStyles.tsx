import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { CodeBlock, CodeInline } from '../../pepper-components/Code'

interface Props {}

const CodeTypes: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Inline code"
      description="Put code samples anywhere, formatted and styled."
      demoDisplayStyle="column"
      demoComponents={[
        <p>
          Here is some <CodeInline>inline code</CodeInline>.
        </p>,
        <CodeBlock lang="javascript">{`
// Here's some block code
const { name, age } = user;
        `}</CodeBlock>,
      ]}
      code={`import { Note } from 'pepper-ui'

const MyComponent = () => (
  <div>
    Here is some <CodeInline>inline code</CodeInline>.
    <CodeBlock lang="javascript">
      {\`
      // Here's some block code
      const { name, age } = user;
      \`}
    </CodeBlock>,
  </div>
)
                  `}
    />
  )
}

export default CodeTypes
