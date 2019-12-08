import styled from 'styled-components'

const BaseInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: solid 2px ${props => props.theme.palette.lightGrey};
  transition: all 0.3s ease;

  :hover {
    border-color: ${props => props.theme.palette.primary}66;
  }

  :focus {
    border-color: ${props => props.theme.palette.primary};
    box-shadow: 0 0 2px 2px ${props => props.theme.palette.primary}33;
    outline: none;
  }
`

export { BaseInput }
