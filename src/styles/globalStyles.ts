import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body{
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background: #FBFBFB; 
  }

  a {
    text-decoration: none;
    color: #3A41C6;
    transition: all 0.2 ease;
    position: relative;

    &:after {
       content: "";
       position: absolute;
       top: 100%;
       left: 0;
       height: 2px;
       width: 0;
       background: linear-gradient(to right, #3A41C6, #512888);
       transition: all 0.2s ease;
    }

    &:hover {
      color: #512888;

      &:after {
        width: 100%;
      }
    }
  }
`
