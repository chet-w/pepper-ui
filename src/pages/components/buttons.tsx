import * as React from 'react'

// Parts
import ButtonTypes from '../../page-parts/Button/ButtonTypes'
import ButtonShapes from '../../page-parts/Button/ButtonShapes'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

import Heading from '../../pepper-components/Headings/index'
import ButtonSpinner from '../../page-parts/Button/ButtonSpinner'
import ButtonIcons from '../../page-parts/Button/ButtonIcons'
import APITable from '../../components/APITable'

interface ButtonPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: ButtonPageProps) => (
  <Layout location={location}>
    <ComponentLayout>
      <Heading level="page" id="buttons">
        Buttons
      </Heading>
      <p>
        Buttons are fairly straightforward elements, they indicate a clickable
        area that'll usually trigger some action.
      </p>
      <ButtonTypes />
      <ButtonShapes />
      <ButtonIcons />
      <ButtonSpinner />
      <APITable
        header={['Prop', 'Description', 'Type', 'Options', 'Default']}
        data={[
          {
            prop: 'type',
            desc: 'The importance level or style of the button',
            type: 'enum',
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
