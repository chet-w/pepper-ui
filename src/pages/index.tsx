import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Pattern from '../images/tic-tac-toe.svg'
import styled from 'styled-components'

// Layout
import Layout from '../layout/index'

// Components
import Heading from '../components/Heading'

interface IndexPageProps {
  location: {
    pathname: string
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.spacing.unit * 3}px;
  background: url(${Pattern}),
    linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
`

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <Heading title="Pepper" subtitle="A new flavour for User Interfaces" />
        <Link to="/components/buttons">Buttons</Link>
      </Wrapper>
    </Layout>
  )
}
