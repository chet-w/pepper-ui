import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../../styles/theme'
import Spinner from '../Spinner/index'
import { Pulse } from '../Animations/index'
import { ReactNode } from 'react'

const BaseButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  padding-left: ${(props: StyledButtonProps) =>
    props.loading ? '40px' : '15px'};
  border-radius: ${(props: StyledButtonProps) =>
    props.shape === 'pills' || props.shape === 'circle' ? '30px' : '8px'};
  cursor: pointer;
  transition: all 0.15s ease;
  background: transparent;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  z-index: 1;
  height: ${(props: StyledButtonProps) =>
    props.shape === 'circle' ? `${props.theme.fontSize * 3}px` : 'auto'};
  width: ${(props: StyledButtonProps) =>
    props.shape === 'circle' ? `${props.theme.fontSize * 3}px` : 'auto'};

  &:focus {
    animation: ${Pulse} ease 1s forwards;
    outline: none;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;

    &:hover {
      filter: brightness(1);
    }
  }

  & ${Spinner} {
    position: absolute;
    left: 1em;
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

  &:hover,
  &:focus {
    filter: brightness(1.2);
  }
`

const SecondaryButton = styled(BaseButton)`
  border: solid 2px ${props => props.theme.palette.primary};
  background: ${props => props.theme.palette.white};
  color: ${props => props.theme.palette.darkPrimary};

  &:hover,
  &:focus {
    filter: brightness(0.95);
  }
`

const TertiaryButton = styled(BaseButton)`
  background: none;
  border: none;
  color: ${props => props.theme.palette.darkPrimary};

  &:hover,
  &:focus {
    filter: brightness(1.2);
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
  background: linear-gradient(to right, #ed213a, #93291e);
  border: 2px solid #93291e;

  &:hover,
  &:focus {
    filter: brightness(1.2);
  }
`

type TypeOptions = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'

type ShapeOptions = 'rounded' | 'pills' | 'circle'

interface StyledButtonProps {
  type: TypeOptions
  shape: ShapeOptions
  loading?: boolean
  disabled?: boolean
  theme: ITheme
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: TypeOptions
  shape: ShapeOptions
  loading?: boolean
  disabled?: boolean
  icon?: ReactNode
  showLoadingContent?: boolean
  loadingContent?: ReactNode | string
  children?: any
}

const Button: React.FC<ButtonProps> = props => {
  const {
    type,
    loading,
    children,
    disabled,
    icon,
    showLoadingContent,
    loadingContent,
    ...otherProps
  } = props

  const ButtonContent = loading ? (
    <>
      <Spinner />
      {showLoadingContent && loadingContent ? loadingContent : children}
    </>
  ) : (
    children
  )

  return type === 'primary' ? (
    <PrimaryButton
      type={type}
      loading={loading}
      disabled={loading || disabled}
      {...otherProps}
    >
      {ButtonContent}
    </PrimaryButton>
  ) : type === 'secondary' ? (
    <SecondaryButton
      type={type}
      loading={loading}
      disabled={loading || disabled}
      {...otherProps}
    >
      {ButtonContent}
    </SecondaryButton>
  ) : type === 'tertiary' ? (
    <TertiaryButton
      type={type}
      loading={loading}
      disabled={loading || disabled}
      {...otherProps}
    >
      {ButtonContent}
    </TertiaryButton>
  ) : type === 'ghost' ? (
    <GhostButton
      type={type}
      loading={loading}
      disabled={loading || disabled}
      {...otherProps}
    >
      {ButtonContent}
    </GhostButton>
  ) : (
    <DangerButton
      type={type}
      loading={loading}
      disabled={loading || disabled}
      {...otherProps}
    >
      {ButtonContent}
    </DangerButton>
  )
}

export { Button }
