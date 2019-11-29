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
      <APITable
        header={['Prop', 'Description', 'Type', 'Options', 'Default']}
        data={[
          {
            prop: 'type',
            desc: 'The importance level or style of the button',
            type: 'string',
            options: [
              'primary',
              'secondary',
              'tertiary',
              'ghost',
              'danger',
              'disabled',
            ],
            default: 'primary',
          },
          {
            prop: 'shape',
            desc: 'The shape of the button',
            type: 'string',
            options: ['rounded', 'pills', 'circle'],
            default: 'rounded',
          },
          {
            prop: 'loading',
            desc: 'Whether to show a spinner or not',
            type: 'boolean',
            options: ['-'],
            default: 'false',
          },
          {
            prop: 'disabled',
            desc: 'Whether the button is inactive',
            type: 'boolean',
            options: ['-'],
            default: 'false',
          },
          {
            prop: 'icon',
            desc: 'The icon to go alongside the button contents',
            type: 'ReactNode',
            options: ['-'],
            default: 'null',
          },
          {
            prop: 'showLoadingContent',
            desc:
              'Whether to show specified text when the button is in a loading state',
            type: 'boolean',
            options: ['-'],
            default: 'false',
          },
          {
            prop: 'loadingContent',
            desc: 'The content to show while the button is in a loading state',
            type: 'ReactNode | string',
            options: ['-'],
            default: 'null',
          },
        ]}
      />
    </ComponentLayout>
  </Layout>
)
