import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  color: ${props => props.theme.palette.white};
  background: linear-gradient(
    to right,
    ${props => props.theme.palette.primary},
    ${props => props.theme.palette.darkPrimary}
  );

  & h2 {
    margin-bottom: 0;
  }
`

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <StyledHeader>
      <h2>Buttons</h2>
    </StyledHeader>
  )
}

export default Header
