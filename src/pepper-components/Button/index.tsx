import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../../styles/theme'

const BaseButton = styled.button`
  position: relative;
  padding: 10px 15px;
  border-radius: ${(props: StyledButtonProps) =>
    props.shape === 'pills' || props.shape === 'circle' ? '30px' : '8px'};
  cursor: pointer;
  transition: all 0.15s ease;
  background: transparent;
  z-index: 1;
  height: ${(props: StyledButtonProps) =>
    props.shape === 'circle' ? `${props.theme.fontSize * 3}px` : 'auto'};
  width: ${(props: StyledButtonProps) =>
    props.shape === 'circle' ? `${props.theme.fontSize * 3}px` : 'auto'};

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${props =>
      props.shape === 'pills' || props.shape === 'circle' ? '30px' : '5px'};
    z-index: -1;
    transition: opacity 0.15s linear;
    opacity: 0;
    background: transparent;
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
    background: ${props => props.theme.palette.white};
  }

  &:hover {
    color: ${props => props.theme.palette.darkPrimary};
  }
`

const SecondaryButton = styled(BaseButton)`
  border: solid 2px ${props => props.theme.palette.primary};
  background: ${props => props.theme.palette.white};
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

const DangerButton = styled(BaseButton)`
  color: ${props => props.theme.palette.white};
  border: 2px solid #93291e;

  &::before {
    background: linear-gradient(to right, #ed213a, #93291e);
    opacity: 1;
  }

  &:hover {
    color: #93291e;

    &::before {
      opacity: 0;
    }
  }
`

type TypeOptions = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'

type ShapeOptions = 'rounded' | 'pills' | 'circle'

interface StyledButtonProps {
  type: TypeOptions
  shape: ShapeOptions
  disabled?: boolean
  theme: ITheme
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: TypeOptions
  shape: ShapeOptions
  disabled?: boolean
  children?: any
}

const Button: React.FC<ButtonProps> = props => {
  const { type, children, ...otherProps } = props

  return type === 'primary' ? (
    <PrimaryButton type={type} {...otherProps}>
      {children}
    </PrimaryButton>
  ) : type === 'secondary' ? (
    <SecondaryButton type={type} {...otherProps}>
      {children}
    </SecondaryButton>
  ) : type === 'tertiary' ? (
    <TertiaryButton type={type} {...otherProps}>
      {children}
    </TertiaryButton>
  ) : type === 'ghost' ? (
    <GhostButton type={type} {...otherProps}>
      {children}
    </GhostButton>
  ) : (
    <DangerButton type={type} {...otherProps}>
      {children}
    </DangerButton>
  )
}

export { Button }
