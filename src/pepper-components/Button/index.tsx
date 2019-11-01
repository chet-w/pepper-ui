import React from 'react'
import styled, { ThemedStyledFunction } from 'styled-components'

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

const TertiaryButton = styled(BaseButton)`
  background: none;
  border: none;
  color: ${props => props.theme.palette.darkPrimary};

  :hover {
    color: ${props => props.theme.palette.primary};
  }
`

const GhostButton = styled(BaseButton)`
  background: none;
  border: solid 2px ${props => props.theme.palette.white};
  color: ${props => props.theme.palette.white};

  :hover {
    color: ${props => props.theme.palette.primary};
    border: solid 2px ${props => props.theme.palette.primary};
  }
`

type TypeOptions = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'

type ShapeOptions = 'rounded' | 'pills' | 'circle'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: TypeOptions
  shape: ShapeOptions
  disabled?: boolean
  children?: any
}

const Button: React.FC<ButtonProps> = props => {
  const { type, children, ...otherProps } = props

  return type === 'primary' ? (
    <PrimaryButton {...otherProps}>{children}</PrimaryButton>
  ) : type === 'secondary' ? (
    <SecondaryButton {...otherProps}>{children}</SecondaryButton>
  ) : type === 'tertiary' ? (
    <TertiaryButton {...otherProps}>{children}</TertiaryButton>
  ) : type === 'ghost' ? (
    <GhostButton {...otherProps}>{children}</GhostButton>
  ) : null
}

export { Button }
