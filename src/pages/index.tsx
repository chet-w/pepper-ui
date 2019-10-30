import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Pattern from '../images/tic-tac-toe.svg'
import styled, { keyframes } from 'styled-components'

// Layout
import Layout from '../layout/index'

// Components
import Heading from '../components/Heading'
import { Button } from '../pepper-components/Button'

interface IndexPageProps {
  location: {
    pathname: string
  }
}

const MoveBackground = keyframes`
  0% {
    background-position-x: 0, 0;
    background-position-y: 0, 0;
  }
  100% {
    background-position-x: 380px, 0;
    background-position-y: 380px, 0;
  }
`

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
  background-size: 60%, 100%;
  /* background-position-x: 384px, 0; */
  animation: ${MoveBackground} 12s linear infinite;
`

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <Heading title="Pepper" subtitle="A new flavour for User Interfaces" />
        <Link to="/components/buttons">
          <Button type="secondary">Buttons</Button>
        </Link>
      </Wrapper>
    </Layout>
  )
}
