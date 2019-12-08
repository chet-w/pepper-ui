import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import BasicInput from '../../pepper-components/Inputs/BasicInput'

interface InputPrefixSuffixProps {}

const InputPrefixSuffix: React.FC<InputPrefixSuffixProps> = () => {
  return (
    <ComponentDocumentationSection
      title="Prefixes and Suffixes"
      description="Add extra contextual information about the input with prefixes or suffixes"
      demoComponents={[
        <BasicInput
          id="demo-prefix"
          placeholder="A New Zealand Phone number"
          type="tel"
          prefix="+64"
        />,
        <BasicInput
          id="demo-suffix"
          placeholder="An email"
          type="text"
          suffix="@gmail.com"
        />,
      ]}
      code={``}
    />
  )
}

export default InputPrefixSuffix
