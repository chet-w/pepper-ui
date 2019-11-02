import * as React from 'react'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { Button } from '../../pepper-components/Button/index'
import { H1 } from '../../pepper-components/Headings/index'

interface ButtonPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: ButtonPageProps) => (
  <Layout location={location}>
    <ComponentLayout>
      <H1>Buttons</H1>
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
        ]}
        code={`import { Button } from 'pepper-ui

const MyComponent = () => (
  <div>
    This is a primary button: <Button type="primary" shape="rounded">
  </div>
)
        `}
      />
    </ComponentLayout>
  </Layout>
)
