import React from 'react'
import styled from 'styled-components'

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
  <article>
    <h2>{title ? title : 'API'}</h2>
    <StyledTable>
      <thead>
        {header.map(heading => (
          <th>{heading}</th>
        ))}
      </thead>
      <tbody>
        {data.map(row => (
          <tr>
            {Object.values(row).map((col, index) =>
              index === 1 ? (
                <td>{col}</td>
              ) : index === 3 ? (
                <td>
                  {col.map((option: string, optIndex: number) => (
                    <>
                      <code>{option}</code>
                      {optIndex !== col.length - 1 && ', '}
                    </>
                  ))}
                </td>
              ) : (
                <td>
                  <code>{col}</code>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </article>
)

export default APITable
