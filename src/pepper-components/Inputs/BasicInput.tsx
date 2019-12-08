import React from 'react'
import { BaseInput } from './InputStyles'

interface BasicInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string
  type?: InputTypeTypes
  placeholder?: string
  name?: string
  label?: string
  prefix?: string
  suffix?: string
}

type InputTypeTypes = 'text' | 'email' | 'password' | 'number'

const BasicInput: React.FC<BasicInputProps> = props => {
  return <BaseInput {...props} />
}

export default BasicInput
