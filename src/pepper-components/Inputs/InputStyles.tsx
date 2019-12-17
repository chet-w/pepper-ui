import { ReactNode } from 'react'
import styled from 'styled-components'
import { ITheme } from '../../styles/theme'

interface BaseInputProps {
  prefixText?: boolean
  suffixText?: boolean
  hasButton?: boolean
  iconPrefix?: ReactNode | string
  theme: ITheme
}

interface AddonProps {
  isActive?: boolean
  theme: ITheme
}

const BaseInput = styled.input`
  padding: 10px;
  border-top-left-radius: ${(props: BaseInputProps) =>
    props.prefixText ? '0' : '10px'};
  border-bottom-left-radius: ${(props: BaseInputProps) =>
    props.prefixText ? '0' : '10px'};
  border-top-right-radius: ${(props: BaseInputProps) =>
    props.suffixText ? '0' : '10px'};
  border-bottom-right-radius: ${(props: BaseInputProps) =>
    props.suffixText ? '0' : '10px'};
  border: solid 2px ${(props: BaseInputProps) => props.theme.palette.lightGrey};
  transition: all 0.3s ease;
  padding-right: ${(props: BaseInputProps) =>
    props.hasButton ? '30px' : '10px'};
  padding-left: ${(props: BaseInputProps) =>
    props.iconPrefix ? '30px' : '10px'};

  :hover {
    border-color: ${(props: BaseInputProps) => props.theme.palette.primary}66;
  }

  :focus {
    border-color: ${(props: BaseInputProps) => props.theme.palette.primary}99;
    box-shadow: 0 0 2px 2px
      ${(props: BaseInputProps) => props.theme.palette.primary}33;
    outline: none;
  }
`

const InputIconPrefix = styled.div`
  filter: grayscale(1);
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
`

const InputAddon = styled.div`
  padding: 10px;
  border: solid 2px ${(props: AddonProps) => props.theme.palette.lightGrey};
  background: ${(props: AddonProps) => props.theme.palette.lightGrey};
  color: ${(props: AddonProps) => props.theme.palette.darkGrey};
`

const InputPrefix = styled(InputAddon)`
  border-radius: 10px 0 0 10px;
`

const InputSuffix = styled(InputAddon)`
  border-radius: 0 10px 10px 0;
`

const InputButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 100px;
  position: relative;
  transform: translateX(calc(-100% - 15px));

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${(props: AddonProps) => props.theme.palette.darkGrey};
    transform: rotate(-45deg) translateY(-2px)
      ${(props: AddonProps) => (props.isActive ? 'scale(1)' : 'scale(0)')};
    transform-origin: top;
    top: 50%;
    left: 0;
    transition: all 0.3s ease;
  }
`

export { BaseInput, InputPrefix, InputSuffix, InputButton, InputIconPrefix }
