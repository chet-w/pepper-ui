import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { Button } from '../../pepper-components/Button/index'

interface Props {}

const ButtonShapes: React.FC<Props> = () => (
  <ComponentDocumentationSection
    title="Shapes"
    description="Different shaped buttons can be used in accordance with your theme. Pepper UI supplies a few basic shapes for convenience."
    demoComponents={[
      <Button type="primary" shape="rounded">
        Rounded
      </Button>,
      <Button type="primary" shape="pills">
        Pills
      </Button>,
      <Button
        type="primary"
        shape="circle"
        style={{ color: 'transparent', textShadow: '0 0 0 white' }}
      >
        &#10060;
      </Button>,
    ]}
    code={`import { Button } from 'pepper-ui'

const MyComponent = () => (
  <div>
    This is the default shape:
    <Button type="primary" shape="rounded">I'm rounded</Button>

    But you can set a shape manually too:
    <Button type="primary" shape="pills">I'm pills</Button>
  </div>
)
        `}
  />
)

export default ButtonShapes
