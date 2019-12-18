import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'
import { SelectSuffix, SelectOption, SelectOptions } from './InputStyles'
import { useState } from 'react'

const SelectWrapper = styled.div`
  position: relative;
`

interface PrefixedSelectProps {
  options: string[]
}

const PrefixedSelect: React.FC<PrefixedSelectProps> = ({ options }) => {
  const [areOptionsOpen, setOptionsOpen] = useState(false)
  const handleClick = event => {
    event.preventDefault()
    setOptionsOpen(!areOptionsOpen)
  }

  return (
    <SelectWrapper>
      <SelectSuffix onClick={event => handleClick(event)}>
        {options.map(option => (
          <option style={{ display: 'none' }} value={option}>
            {option}
          </option>
        ))}
      </SelectSuffix>
      {areOptionsOpen && (
        <SelectOptions>
          {options.map(option => (
            <SelectOption value={option}>{option}</SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectWrapper>
  )
}

export { PrefixedSelect }
