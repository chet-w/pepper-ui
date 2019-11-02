import * as React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vsDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'
import { Button } from '../../pepper-components/Button/index'
import { H1, H2 } from '../../pepper-components/Headings/index'

interface ButtonPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: ButtonPageProps) => (
  <Layout location={location}>
    <ComponentLayout>
      <H1>Buttons</H1>
      <section>
        <p>
          Buttons are pretty straightforward - a clickable or tappable target
          that'll usually execute some task. Use the right kind of button to
          bring different levels of importance to your calls to action.
        </p>
      </section>
      <section>
        <article>
          <H2>Primary</H2>
          <p>Used to indicate your main action on the page or component.</p>
          <div>
            <Button type="primary" shape="rounded">
              I'm important
            </Button>
            <Button type="secondary" shape="rounded">
              I'm a bit less important
            </Button>
            <Button type="tertiary" shape="rounded">
              I'm even less important
            </Button>
            <Button type="ghost" shape="rounded">
              I'm good on colored backgrounds
            </Button>
          </div>
        </article>
        <SyntaxHighlighter language="jsx" style={theme}>
          {`import { Button } from 'pepper-ui'

const MyComponent = () => (
  <div>
    This is my button <Button type="primary" shape="rounded">Click me</Button>
  </div>
)`}
        </SyntaxHighlighter>
      </section>
    </ComponentLayout>
  </Layout>
)
