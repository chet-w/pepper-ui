import * as React from 'react'

// Parts
import InputTypes from '../../page-parts/BasicInput/InputTypes'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

import Heading from '../../pepper-components/Headings/index'
import APITable from '../../components/APITable'

interface BasicInputPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: BasicInputPageProps) => (
  <Layout location={location}>
    <ComponentLayout>
      <Heading level="page" id="basic-input">
        Basic input
      </Heading>
      <p>
        The Basic input component is for when you need to collect some input
        from your users from a form of sorts.
      </p>

      <InputTypes />
      <APITable
        title="API"
        header={['Prop', 'Description', 'Type', 'Options', 'Default']}
        data={[
          {
            prop: 'lang',
            desc: 'The programming language to syntax highlight',
            type: 'enum',
            options: ['[to come later]'],
            default: '-',
          },
        ]}
      />
    </ComponentLayout>
  </Layout>
)
