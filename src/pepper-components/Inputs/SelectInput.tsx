import React from 'react'

interface PrefixedSelectProps {
  options: string[]
}

const PrefixedSelect: React.FC<PrefixedSelectProps> = props => {
  return (
    <div>
      <select>
        <option>test1</option>
        <option>test2</option>
        <option>test3</option>
      </select>
    </div>
  )
}

export { PrefixedSelect }
