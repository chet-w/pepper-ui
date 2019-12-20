import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'

interface SelectInputProps {}

const SelectInput: React.FC<SelectInputProps> = () => {
  return (
    <ComponentDocumentationSection
      title="Select Inputs"
      description="Use a dropdown to provide options for a user to choose from. Traditional select inputs aren't always the easiest to style and are often mismatched with the overal theme of your app, but a Pepper Select Input is build from the ground up to be both elegant and accessible."
      demoComponents={[]}
      code={`import { Select } from 'pepper-ui'

const MyComponent = () => (
)
        `}
    />
  )
}

export default SelectInput
