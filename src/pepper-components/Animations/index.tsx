import { keyframes } from 'styled-components'

const SpinInfinite = keyframes`
    from {
        transform: rotate(0)
    }
    to {
        transform: rotate(360deg)
    }
`

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(58,65,198, 0.4);
  }
  70% {
      box-shadow: 0 0 0 8px rgba(58,65,198, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(58,65,198, 0);
  }
`
export { SpinInfinite, Pulse }
