import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { H1, H2, H3, H4, H5, H6 } from '../../pepper-components/Headings'

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
      <H1>Page level</H1>,
      <H2>Section level</H2>,
      <H3>Subsection level</H3>,
      <H4>Less important</H4>,
      <H5>Even less important</H5>,
      <H6>Least important</H6>,
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
