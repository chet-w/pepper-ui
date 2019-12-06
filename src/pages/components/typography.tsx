import * as React from 'react'

// Parts
import HeadingsLevels from '../../page-parts/Typography/HeadingLevels'
import HeadingStyles from '../../page-parts/Typography/HeadingStyles'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

import Heading from '../../pepper-components/Headings/index'
import APITable from '../../components/APITable'
import NotesStyles from '../../page-parts/Typography/NoteStyles'

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
      <APITable
        title="API - Headings"
        header={['Prop', 'Description', 'Type', 'Options', 'Default']}
        data={[
          {
            prop: 'level',
            desc: 'The HTML level of the heading.',
            type: 'enum',
            options: [
              'page',
              'section',
              'subsection',
              'note',
              'minor',
              'very-minor',
            ],
            default: '-',
          },
          {
            prop: 'id',
            desc:
              'id attribute for the heading. Mainly used for when the Heading is linked',
            type: 'string',
            options: ['-'],
            default: '-',
          },
          {
            prop: 'underlined',
            desc: 'Use the underlined style or not',
            type: 'boolean',
            options: ['-'],
            default: 'false',
          },
          {
            prop: 'linked',
            desc: 'Whether to add a hyperlink to the heading or not',
            type: 'boolean',
            options: ['-'],
            default: 'false',
          },
        ]}
      />
      <Heading level="section" id="notes">
        Notes
      </Heading>
      <NotesStyles />
      <APITable
        title="API - Headings"
        header={['Prop', 'Description', 'Type', 'Options', 'Default']}
        data={[
          {
            prop: 'type',
            desc: 'What type of Note should be created',
            type: 'enum',
            options: ['info', 'success', 'danger', 'warning'],
            default: '-',
          },
          {
            prop: 'heading',
            desc: 'The heading for the Note',
            type: 'string',
            options: ['-'],
            default: '-',
          },
        ]}
      />
      <Heading level="section" id="code">
        Code
      </Heading>
    </ComponentLayout>
  </Layout>
)
