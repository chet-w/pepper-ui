import styled from 'styled-components'
import { ITheme } from '../../styles/theme'

interface BaseInputProps {
  prefixText?: boolean
  suffixText?: boolean
  theme: ITheme
}

interface AddonProps {
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

export { BaseInput, InputPrefix, InputSuffix }
