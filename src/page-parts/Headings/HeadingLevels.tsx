import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import Heading from '../../pepper-components/Headings'

interface Props {}

const HeadingsLevels: React.FC<Props> = () => (
  <ComponentDocumentationSection
    title="Levels"
    description="Use the different levels of Headings to establish a heirarchy of importance foor the content on the page"
    notes={[
      <p>
        For SEO, it's important to make sure you use at least your{' '}
        <code>H1</code>, <code>H2</code>, and <code>H3</code> headings. While
        you should try use all the levels when necessary, search engines care
        most about the first three.
      </p>,
    ]}
    demoComponents={[
      <Heading level="page" id="page-level">
        Page level
      </Heading>,
      <Heading level="section" id="section-level">
        Section level
      </Heading>,
      <Heading level="subsection" id="subsection-level">
        Subsection level
      </Heading>,
      <Heading level="note" id="note-level">
        Less important
      </Heading>,
      <Heading level="minor" id="minor-level">
        Even less important
      </Heading>,
      <Heading level="very-minor" id="very-minor-level">
        Least important
      </Heading>,
    ]}
    demoDisplayStyle={'column'}
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

export default HeadingsLevels
