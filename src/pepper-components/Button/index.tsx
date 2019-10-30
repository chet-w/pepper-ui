import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  type: string
  rounded?: boolean
}

const BaseButton = styled.button`
  position: relative;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  z-index: 1;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    z-index: -1;
    transition: opacity 0.15s linear;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`

const PrimaryButton = styled(BaseButton)`
  border: solid 2px ${props => props.theme.palette.primary};
  background: linear-gradient(
    to right,
    ${props => props.theme.palette.primary},
    ${props => props.theme.palette.darkPrimary}
  );
  color: white;

  &::before {
    background: linear-gradient(to right, white, white);
  }

  &:hover {
    color: ${props => props.theme.palette.darkPrimary};
  }
`

const SecondaryButton = styled(BaseButton)`
  border: solid 2px ${props => props.theme.palette.primary};
  background: white;
  color: ${props => props.theme.palette.darkPrimary};

  &::before {
    background: linear-gradient(
      to right,
      ${props => props.theme.palette.primary},
      ${props => props.theme.palette.darkPrimary}
    );
  }

  &:hover {
    color: white;
  }
`

const Button = props => {
  const { type, children, ...otherProps } = props

  return props.type === 'primary' ? (
    <PrimaryButton {...otherProps}>{children}</PrimaryButton>
  ) : props.type === 'secondary' ? (
    <SecondaryButton {...otherProps}>{children}</SecondaryButton>
  ) : (
    'Error'
  )
}

export { Button }
