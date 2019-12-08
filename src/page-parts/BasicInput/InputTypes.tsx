import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import BasicInput from '../../pepper-components/Inputs/BasicInput'

interface Props {}

const InputTypes: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Variations"
      description={
        <>
          <p>You can use Basic input as a:</p>
          <ul>
            <li>Text input</li>
            <li>Email input</li>
            <li>Password input</li>
          </ul>
          <p>
            You can also attach a label (which is recommended) and choose where
            you want to place it in relation to your input.
          </p>
        </>
      }
      demoComponents={[
        <BasicInput id="demo-text" placeholder="A text input" />,
        <BasicInput
          id="demo-email"
          placeholder="An email input"
          type="email"
          label="Email:"
          labelPlacement="top"
        />,
        <BasicInput
          id="demo-password"
          placeholder="A password input"
          type="password"
          label="Password:"
        />,
      ]}
      demoDisplayStyle="column"
      code={`import { Input } from 'pepper-ui'

const MyComponent = () => (
  <div>
    <BasicInput id="demo-text" placeholder="A text input" />,
    <BasicInput
     id="demo-email"
     placeholder="An email input"
     type="email"
     label="Email:"
     labelPlacement="top"
    />,
    <BasicInput
     id="demo-password"
     placeholder="A password input"
     type="password"
     label="Password:"
    />
  </div>
)
        `}
    />
  )
}

export default InputTypes
