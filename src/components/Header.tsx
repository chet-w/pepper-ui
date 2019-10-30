import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Pattern from '../images/tic-tac-toe.svg'
import { Link } from 'gatsby'

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  color: ${props => props.theme.palette.white};
  background: url(${Pattern}),
    linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );

  & ${Container} {
    justify-content: space-between;
  }

  & h2 {
    margin-bottom: 0;

    a::after {
      content: none;
    }
  }

  & nav {
    display: flex;
    width: 300px;
    justify-content: space-between;
  }

  a {
    color: white;

    ::after {
      background: white;
    }
  }
`

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <StyledHeader>
      <Container>
        <h2>
          <Link to="/">Pepper UI</Link>
        </h2>
        <nav>
          <div>Search</div>
          <Link to="/components">Components</Link>
          <Link to="/contributing">Contributing</Link>
        </nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
