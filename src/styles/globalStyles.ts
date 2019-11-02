import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Operator Mono Book';
    font-style: normal;
    font-weight: normal;
    src: local('Operator Mono Book'), url('../fonts/OperatorMono-Book.woff') format('woff');
}
@font-face {
    font-family: 'Operator Mono Book Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Operator Mono Book Italic'), url('../fonts/OperatorMono-BookItalic.woff') format('woff');
}

  body{
    -webkit-font-smoothing: antialiased;
    margin: 0;
    background: #FFFFFF; 
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

  p {
    max-width: 50pc;
  }

  code {
    font-family: "Operator Mono Book", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
  }
`
