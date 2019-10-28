import * as React from 'react'

// Layout
import Layout from '../../layout/index'
import ComponentLayout from '../../layout/component'

interface ButtonPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: ButtonPageProps) => (
  <Layout location={location}>
    <ComponentLayout>This iscontent</ComponentLayout>
  </Layout>
)
