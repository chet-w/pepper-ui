import * as React from 'react'

// Parts
import ButtonTypes from '../../page-parts/Button/ButtonTypes'
import ButtonShapes from '../../page-parts/Button/ButtonShapes'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

import { H1 } from '../../pepper-components/Headings/index'
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
      <H1>Buttons</H1>
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
            type: 'string',
            options: 'primary, secondary, tertiary, ghost, danger, disabled',
            default: 'primary',
          },
          { prop: '', desc: '', type: '', options: '', default: '' },
          { prop: '', desc: '', type: '', options: '', default: '' },
          { prop: '', desc: '', type: '', options: '', default: '' },
          { prop: '', desc: '', type: '', options: '', default: '' },
        ]}
      />
    </ComponentLayout>
  </Layout>
)
