import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface Props {}

const StyledSidebar = styled.aside`
  width: 200px;
  height: 100%;
  background: ${props => props.theme.palette.white};
  padding: 20px;
`

const Sidebar: React.FC<Props> = () => {
  const menuItems = [
    {
      section: 'General',
      children: [
        {
          name: 'Buttons',
          path: '/components/buttons',
        },
        {
          name: 'Headings',
          path: '/components/headings',
        },
      ],
    },
    {
      section: 'Inputs',
      children: [
        {
          name: 'Basic input',
          path: '/components/basic-input',
        },
        {
          name: 'Number input',
          path: '/components/numbers',
        },
        {
          name: 'Radio',
          path: '/components/radio',
        },
      ],
    },
  ]

  return (
    <StyledSidebar>
      {menuItems.map(item => (
        <>
          <h4>{item.section}</h4>
          <ul>
            {item.children.map(child => (
              <li>
                <Link to={child.path}>{child.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ))}
    </StyledSidebar>
  )
}

export default Sidebar
