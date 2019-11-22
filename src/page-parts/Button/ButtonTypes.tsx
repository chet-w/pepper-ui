import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { Button } from '../../pepper-components/Button/index'

interface Props {}

const ButtonTypes: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Types"
      description="Use different types of buttons to add different levels of importance to UI elements."
      demoComponents={[
        <Button type="primary" shape="rounded">
          Primary
        </Button>,
        <Button type="secondary" shape="rounded">
          Secondary
        </Button>,
        <Button type="tertiary" shape="rounded">
          Tertiary
        </Button>,
        <div
          style={{
            background: '#373737',
            padding: ' 10px 20px',
            borderRadius: '5px',
          }}
        >
          <Button type="ghost" shape="rounded">
            Ghost
          </Button>
        </div>,
        <Button type="danger" shape="rounded">
          Danger
        </Button>,
      ]}
      code={`import { Button } from 'pepper-ui

const MyComponent = () => (
  <div>
    This is a primary button:
    <Button type="primary" shape="rounded">I'm important</Button>
  </div>
)
        `}
    />
  )
}

export default ButtonTypes
