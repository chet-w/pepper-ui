import React from 'react'
import styled from 'styled-components'
import { SpinInfinite } from '../Animations'

const Spinner = styled.span`
  height: 1em;
  width: 1em;
  display: inline-block;
  border: solid;
  border-radius: 20px;
  border-right: none;
  border-top: none;
  border-bottom: none;
  margin-right: 5px;
  animation: ${SpinInfinite} linear 0.5s infinite;
`

export default Spinner
