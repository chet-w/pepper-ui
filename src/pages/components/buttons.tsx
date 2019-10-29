import * as React from 'react'

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
            <Button type="primary">I'm important</Button>
          </div>
        </article>
      </section>
    </ComponentLayout>
  </Layout>
)
