import * as React from 'react'

// Parts
import HeadingsLevels from '../../page-parts/Headings/HeadingLevels'
import HeadingStyles from '../../page-parts/Headings/HeadingStyles'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

import Heading from '../../pepper-components/Headings/index'
import APITable from '../../components/APITable'

interface TypographyPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: TypographyPageProps) => (
  <Layout location={location}>
    <ComponentLayout>
      <Heading level="page" id="typography">
        Typography
      </Heading>
      <p>
        Typography is the section to do with the text used on the page. It
        covers topics such as Headings, Links, Code Snippets, and Notes.
      </p>
      <Heading level="section" id="headings">
        Headings
      </Heading>
      <HeadingsLevels />
      <HeadingStyles />
      <Heading level="section" id="notes">
        Notes
      </Heading>
      <Heading level="section" id="code">
        Code
      </Heading>
      <APITable
        header={['Prop', 'Description', 'Type', 'Options', 'Default']}
        data={[]}
      />
    </ComponentLayout>
  </Layout>
)
