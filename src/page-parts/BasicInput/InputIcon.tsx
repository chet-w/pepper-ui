import React from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import BasicInput from '../../pepper-components/Inputs/BasicInput'

interface Props {}

const InputIcon: React.FC<Props> = () => {
  return (
    <ComponentDocumentationSection
      title="Icons and actions"
      description={
        <>
          <p>
            Using Icons is a great way to make a normal Input stand out as well
            as give some context to what content goes in there. It's also common
            now to see small action buttons at the end of inputs to toggle a
            quick function.
          </p>
          <p>
            Both of these are small touches that can improve the UX of a common
            form.
          </p>
        </>
      }
      demoComponents={[
        <BasicInput
          id="demo-icon-prefix"
          placeholder="Username"
          type="text"
          label="With an Icon"
          iconPrefix={'🧑'}
        />,
        <BasicInput
          id="demo-text"
          placeholder="You can clear the input"
          type="email"
          label="Username:"
          hasClearButton
        />,
        <BasicInput
          id="demo-password"
          placeholder="Or show the password"
          type="password"
          label="Password:"
          hasShowButton
        />,
      ]}
      code={`import { Input } from 'pepper-ui'

const MyComponent = () => (
  <div>
  </div>
)
        `}
    />
  )
}

export default InputIcon
