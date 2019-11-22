import React, { useState } from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { Button } from '../../pepper-components/Button/index'
import { useEffect } from 'react'

interface Props {}

const ButtonSpinner: React.FC<Props> = () => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setLoading(false), 3000)
    }
  })

  return (
    <ComponentDocumentationSection
      title="Spinners"
      description="Throw a spinner into your button to show a loading state for an asynchronous process."
      demoComponents={[
        <Button
          type="primary"
          shape="rounded"
          loading={isLoading}
          onClick={() => setLoading(true)}
        >
          Static text
        </Button>,
        <Button
          type="primary"
          shape="rounded"
          loading={isLoading}
          onClick={() => setLoading(true)}
          showLoadingContent
          loadingContent="🤔"
        >
          Dynamic text
        </Button>,
      ]}
      code={`import { Button } from 'pepper-ui'

const MyComponent = () => (
  <div>
    This is the button that changes text when loading:
    <Button
      type="primary"
      shape="rounded"
      loading={isLoading}
      onClick={() => setLoading(true)}
      showLoadingContent
      loadingContent="🤔"
    >
      Dynamic text
    </Button>
  </div>
)
        `}
    />
  )
}

export default ButtonSpinner
