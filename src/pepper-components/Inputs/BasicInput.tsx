import React from 'react'
import { BaseInput, InputPrefix, InputSuffix } from './InputStyles'
import styled from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: InputWrapperProps) =>
    props.labelPlacement === 'top' ? 'column' : 'row'};
  align-items: ${(props: InputWrapperProps) =>
    props.labelPlacement === 'top' ? 'initial' : 'center'};
  justify-content: ${(props: InputWrapperProps) =>
    props.labelPlacement === 'top' ? 'initial' : 'center'};

  & label {
    margin: ${(props: InputWrapperProps) =>
      props.labelPlacement === 'top' ? '0 0 5px 0' : '0 5px 0 0'};
  }
`

const AddonWrapper = styled.div`
  display: flex;
`

interface BasicInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string
  type?: InputTypeTypes
  placeholder?: string
  name?: string
  label?: string
  labelPlacement?: LabelPlacementTypes
  prefix?: string
  suffix?: string
  hasClearButton?: boolean
}

interface InputWrapperProps {
  labelPlacement: LabelPlacementTypes
}

type InputTypeTypes = 'text' | 'email' | 'password' | 'number' | 'tel'

type LabelPlacementTypes = 'left' | 'top'

const BasicInput: React.FC<BasicInputProps> = props => {
  const { label, id, prefix, suffix, labelPlacement, ...otherProps } = props

  return (
    <InputWrapper labelPlacement={labelPlacement ? labelPlacement : 'left'}>
      {label && <label htmlFor={id}>{label}</label>}
      {prefix && <InputPrefix>{prefix}</InputPrefix>}
      <BaseInput id={id} {...otherProps} prefix={prefix} suffix={suffix} />
      {suffix && <InputSuffix>{suffix}</InputSuffix>}
    </InputWrapper>
  )
}

export default BasicInput
