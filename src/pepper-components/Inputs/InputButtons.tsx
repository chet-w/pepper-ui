import React from 'react'
import { InputButton } from './InputStyles'

interface ShowHidePasswordButtonProps {
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  isShowingPassword: boolean
}

interface ClearInputButtonProps {}

const ShowHidePasswordButton: React.FC<ShowHidePasswordButtonProps> = ({
  setShowPassword,
  isShowingPassword,
}) => {
  return (
    <InputButton
      onClick={() => setShowPassword(!isShowingPassword)}
      title={`${isShowingPassword ? 'Hide' : 'Show'} password`}
      isActive={isShowingPassword}
    >
      👁
    </InputButton>
  )
}

const ClearInputButton: React.FC<ClearInputButtonProps> = () => {
  return <InputButton isActive={false}>👊</InputButton>
}

export { ShowHidePasswordButton, ClearInputButton }
