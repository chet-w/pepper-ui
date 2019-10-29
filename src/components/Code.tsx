import styled from 'styled-components'

const CodeBlock = styled.code`
  background: #373737;
  display: block;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-family: 'Operator Mono Book', 'Arial';
`

const CodeLine = styled.pre`
  color: white;
  font-family: 'Operator Mono Book', 'Arial';
  margin: 0;
  padding-left: ${props => props.indent * 24}px;
`

const VarType = styled.span`
  color: #66d9ef;
`
const Keyword = styled.span`
  color: #f92672;
`
const Param = styled.span`
  color: #fd971f;
`
const Primative = styled.span`
  color: #ae81ff;
`
const String = styled.span`
  color: #e6db74;
`
const Attribute = styled.span`
  color: #a6e22e;
`

export {
  CodeBlock,
  CodeLine,
  VarType,
  Keyword,
  Param,
  Primative,
  String,
  Attribute,
}
