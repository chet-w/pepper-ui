import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  margin-bottom: 30px;
`;

const StyledTable = styled.table`
  & code {
    background: ${props => `${props.theme.palette.primary}22`};
    padding: 2px 4px;
    color: ${props => props.theme.palette.primary};
  }
`

interface Props {
  title?: string
  header: string[]
  data: APITableRow[]
}

interface APITableRow {
  prop: string
  desc: string
  type: string
  options: string[]
  default: string
}

const APITable: React.FC<Props> = ({ title, header, data }) => (
  <Wrapper>
    <h2>{title ? title : 'API'}</h2>
    <StyledTable>
      <thead>
        <tr>
          {header.map((heading, index) => (
            <th key={`api-${index}-${heading}`}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`api-table-row-${title}-${rowIndex}`}>
            {Object.values(row).map((col, index) =>
              index === 1 ? (
                <td key={`${col}-${index}`}>{col}</td>
              ) : index === 3 ? (
                <td key={`${col}-${index}`}>
                  {col.map((option: string, optIndex: number) => (
                    <React.Fragment key={`${option} + ${optIndex}`}>
                      <code>{option}</code>
                      {optIndex !== col.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </td>
              ) : (
                <td key={`${col}-${index}`}>
                  <code>{col}</code>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </Wrapper>
)

export default APITable
