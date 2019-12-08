import React from 'react'

interface ShowHidePasswordButtonProps {
  isShowing: boolean
}

interface ClearInputButtonProps {}

const ShowHidePasswordButton: React.FC<ShowHidePasswordButtonProps> = ({
  isShowing,
}) => {
  return <div>PW</div>
}

const ClearInputButton: React.FC<ClearInputButtonProps> = () => {
  return <div>CLEAR</div>
}

export { ShowHidePasswordButton, ClearInputButton }
