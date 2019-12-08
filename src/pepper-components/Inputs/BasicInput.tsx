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
  prefixText?: string | string[]
  suffixText?: string | string[]
  hasClearButton?: boolean
}

interface InputWrapperProps {
  labelPlacement: LabelPlacementTypes
}

type InputTypeTypes = 'text' | 'email' | 'password' | 'number' | 'tel'

type LabelPlacementTypes = 'left' | 'top'

const BasicInput: React.FC<BasicInputProps> = props => {
  const {
    label,
    id,
    prefixText,
    suffixText,
    labelPlacement,
    ...otherProps
  } = props

  return (
    <InputWrapper labelPlacement={labelPlacement ? labelPlacement : 'left'}>
      {label && <label htmlFor={id}>{label}</label>}
      {prefixText && <InputPrefix>{prefixText}</InputPrefix>}
      <BaseInput
        id={id}
        {...otherProps}
        prefixText={!!prefixText}
        suffixText={!!suffixText}
      />
      {suffixText && <InputSuffix>{suffixText}</InputSuffix>}
    </InputWrapper>
  )
}

export default BasicInput
