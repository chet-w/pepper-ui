import styled from 'styled-components'

const Button = styled.button`
  position: relative;
  padding: 10px 15px;
  border-radius: 8px;
  border: solid 2px ${props => props.theme.palette.primary};
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${props => props.theme.palette.primary},
    ${props => props.theme.palette.darkPrimary}
  );
  color: white;
  transition: all 0.15s ease;
  z-index: 1;

  :hover {
    color: ${props => props.theme.palette.darkPrimary};
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 6px;
    background: linear-gradient(to right, white, white);
    z-index: -1;
    transition: opacity 0.15s linear;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`

export { Button }
