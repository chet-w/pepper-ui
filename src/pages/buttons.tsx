import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Layout
import Layout from '../layout/index'

// Components
import Heading from '../components/Heading'
import Header from "../components/Header"

interface ButtonPageProps {
  location: {
    pathname: string
  }
}

export default ({ location }: ButtonPageProps) => {
  return (
    <Layout location={location}>
      <Header />
    </Layout>
  )
}

