import * as React from 'react'

// Parts
import HeadingsLevels from '../../page-parts/Heading/HeadingsLevels'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

import { H1 } from '../../pepper-components/Headings/index'
import APITable from '../../components/APITable'

interface HeadingPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: HeadingPageProps) => (
  <Layout location={location}>
    <ComponentLayout>
      <H1>Headings</H1>
      <p>
        Headings help identify where in the page the user is and gives context
        to the information that follows it. Using the right type of Heading for
        the situation is bit thing for accessibility as it lets screen-readers
        know the importnce level for the following section, and it gives an SEO
        bonus too.
      </p>
      <HeadingsLevels />
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
