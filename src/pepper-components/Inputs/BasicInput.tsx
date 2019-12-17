import React, { useState } from 'react'
import {
  BaseInput,
  InputPrefix,
  InputSuffix,
  InputIconPrefix,
} from './InputStyles'
import { PrefixedSelect } from './SelectInput'
import styled from 'styled-components'
import { ShowHidePasswordButton, ClearInputButton } from './InputButtons'
import { ReactNode } from 'react'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: InputWrapperProps) =>
    props.labelPlacement === 'top' ? 'column' : 'row'};
  align-items: ${(props: InputWrapperProps) =>
    props.labelPlacement === 'top' ? 'initial' : 'center'};
  justify-content: ${(props: InputWrapperProps) =>
    props.labelPlacement === 'top' ? 'initial' : 'center'};
  position: relative;

  & label {
    margin: ${(props: InputWrapperProps) =>
      props.labelPlacement === 'top' ? '0 0 5px 0' : '0 5px 0 0'};
  }
`

const InnerWrapper = styled.div`
  display: flex;
  position: relative;
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
  hasShowButton?: boolean
  iconPrefix?: ReactNode | string
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
    type,
    hasClearButton,
    hasShowButton,
    prefixText,
    suffixText,
    iconPrefix,
    labelPlacement,
    ...otherProps
  } = props

  const [isShowingPassword, setShowPassword] = useState(false)
  const [inputContents, setInputContents] = useState('')

  return (
    <InputWrapper labelPlacement={labelPlacement ? labelPlacement : 'left'}>
      {label && <label htmlFor={id}>{label}</label>}
      {Array.isArray(prefixText) ? (
        <PrefixedSelect options={prefixText} />
      ) : (
        prefixText && <InputPrefix>{prefixText}</InputPrefix>
      )}
      <InnerWrapper>
        {iconPrefix && <InputIconPrefix>{iconPrefix}</InputIconPrefix>}
        <BaseInput
          id={id}
          type={
            type === 'password'
              ? isShowingPassword
                ? 'text'
                : 'password'
              : type
          }
          prefixText={!!prefixText}
          iconPrefix={iconPrefix}
          suffixText={!!suffixText}
          hasButton={hasShowButton || hasClearButton}
          value={inputContents}
          onChange={event => setInputContents(event.target.value)}
          {...otherProps}
        />
      </InnerWrapper>
      {type === 'password' && hasShowButton && (
        <ShowHidePasswordButton
          setShowPassword={setShowPassword.bind(this)}
          isShowingPassword={isShowingPassword}
        />
      )}
      {type !== 'password' && hasClearButton && (
        <ClearInputButton handleClick={setInputContents.bind(this)} />
      )}
      {Array.isArray(suffixText) ? (
        <PrefixedSelect options={suffixText} />
      ) : (
        suffixText && <InputSuffix>{suffixText}</InputSuffix>
      )}
    </InputWrapper>
  )
}

export default BasicInput
