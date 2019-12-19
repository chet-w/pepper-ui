import React, { useRef } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useSpring } from 'react-spring'

import { SelectSuffix, SelectOption, SelectOptions } from './InputStyles'
import useClickOutside from '../_helpers/useClickOutside'

const SelectWrapper = styled.div`
  position: relative;
`

interface PrefixedSelectProps {
  options: string[]
}

const PrefixedSelect: React.FC<PrefixedSelectProps> = ({ options }) => {
  const [areOptionsOpen, setOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])
  const selectOptionsRef = useRef(null)

  useClickOutside(selectOptionsRef, () => {
    closeOptionsFromOutside.bind(this)
  })

  const handleSuffixClick = (
    event: React.MouseEvent<HTMLSelectElement, MouseEvent>
  ) => {
    event.preventDefault()
    setOptionsOpen(!areOptionsOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setOptionsOpen(false)
  }

  const closeOptionsFromOutside = () => {
    setOptionsOpen(false)
  }

  const FadeInAnimation = useSpring({
    opacity: areOptionsOpen ? 1 : 0,
    transform: areOptionsOpen ? 'translateY(0)' : 'translateY(-10px)',
  })

  return (
    <SelectWrapper>
      <SelectSuffix
        onClick={event => handleSuffixClick(event)}
        value={selectedOption}
      >
        {options.map(option => (
          <option style={{ display: 'none' }} value={option}>
            {option}
          </option>
        ))}
      </SelectSuffix>
      <SelectOptions style={FadeInAnimation} ref={selectOptionsRef}>
        {options.map(option => (
          <SelectOption
            onClick={() => handleOptionClick(option)}
            value={option}
            isActive={option === selectedOption}
          >
            {option}
          </SelectOption>
        ))}
      </SelectOptions>
    </SelectWrapper>
  )
}

export { PrefixedSelect }
