import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { Button } from '../../pepper-components/Button/index'

interface Props {}

const ButtonIcons: React.FC<Props> = () => (
  <ComponentDocumentationSection
    title="With Icons"
    description="Icons are a great helper for your UI and can compliment text in buttons to draw user attention and clarify what the button does."
    demoComponents={[
      <Button type="primary" shape="rounded">
        HEY DON'T FORGET TO ADD AN ICON LATER
      </Button>,
    ]}
    code={`import { Button } from 'pepper-ui'

const MyComponent = () => (
  FINISH THIS CODE
)
        `}
  />
)

export default ButtonIcons
