import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface Props {}

const StyledSidebar = styled.aside`
  width: 200px;
  height: 100%;
  background: ${props => props.theme.palette.white};
  padding: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 80%;
    left: 100%;
    top: 10%;
    width: 2px;
    background: linear-gradient(
    to bottom,
    ${props => props.theme.palette.primary},
    ${props => props.theme.palette.darkPrimary}
  );
  }

  & ul {
    list-style: none;
    margin-left: 0;
  }

  & li {
    /* border-bottom: solid 1px ${props => props.theme.palette.lightGrey}; */
    padding: 5px;
  }
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
