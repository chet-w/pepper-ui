import * as React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const Pattern = require('../images/tic-tac-toe.svg')

// Layout
import Layout from '../layout/index'

// Components
import { Button } from '../pepper-components/Button'
import { H1, H3 } from '../pepper-components/Headings'

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

  & ${H1}, ${H3} {
    color: ${props => props.theme.palette.white};
  }
`

const Buttons = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`

export default ({ location }: IndexPageProps) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <H1>Pepper</H1>
        <H3>A new flavour for User Interfaces</H3>
        <Buttons>
          <Link to="/components/buttons">
            <Button type="secondary" shape="rounded">
              Components
            </Button>
          </Link>
          <Link to="/components/buttons">
            <Button type="ghost" shape="rounded">
              Usage
            </Button>
          </Link>
        </Buttons>
      </Wrapper>
    </Layout>
  )
}
