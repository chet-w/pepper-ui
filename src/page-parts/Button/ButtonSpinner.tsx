import React, { useState } from 'react'
import ComponentDocumentationSection from '../../components/ComponentDocumentationSection'
import { Button } from '../../pepper-components/Button/index'
import { useEffect } from 'react'

interface Props {}

const ButtonSpinner: React.FC<Props> = () => {
  const [isFirstLoading, setFirstLoading] = useState(false)
  const [isSecondLoading, setSecondLoading] = useState(false)

  useEffect(() => {
    if (isFirstLoading) {
      setTimeout(() => setFirstLoading(false), 3000)
    }
    if (isSecondLoading) {
      setTimeout(() => setSecondLoading(false), 3000)
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
          loading={isFirstLoading}
          onClick={() => setFirstLoading(true)}
        >
          Static text
        </Button>,
        <Button
          type="primary"
          shape="rounded"
          loading={isSecondLoading}
          onClick={() => setSecondLoading(true)}
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
