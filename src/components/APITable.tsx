import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table``

interface Props {
  header: string[]
  data: APITableRow[]
}

interface APITableRow {
  prop: string
  desc: string
  type: string
  options: string
  default: string
}

const APITable: React.FC<Props> = ({ header, data }) => (
  <article>
    <h2>API</h2>
    <StyledTable>
      <thead>
        {header.map(heading => (
          <th>{heading}</th>
        ))}
      </thead>
      <tbody>
        {data.map(row => (
          <tr>
            {Object.values(row).map(col => (
              <td>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </article>
)

export default APITable
