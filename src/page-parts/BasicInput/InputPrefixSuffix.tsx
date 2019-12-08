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
          prefixText="+64"
        />,
        <BasicInput
          id="demo-suffix"
          placeholder="An email"
          type="text"
          suffixText="@gmail.com"
        />,
        <BasicInput
          id="demo-suffix"
          placeholder="An email"
          type="text"
          suffixText={['@gmail.com', '@outlook.com', '@icloud.com']}
        />,
      ]}
      code={`import { Input } from 'pepper-ui'

const MyComponent = () => (
  <div>
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
    />
  </div>
)
        `}
    />
  )
}

export default InputPrefixSuffix
