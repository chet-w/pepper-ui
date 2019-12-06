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

const SidebarContent = styled.div`
  position: sticky;
  top: 20px;
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
          name: 'Icons',
          path: '/components/icons',
        },
        {
          name: 'Typography',
          path: '/components/typography',
        },
      ],
    },
    {
      section: 'Layout',
      children: [
        {
          name: 'Header',
          path: '/components/header',
        },
        {
          name: 'Footer',
          path: '/components/footer',
        },
        {
          name: 'Carousel',
          path: '/components/carousel',
        },
        {
          name: 'Tabs',
          path: '/components/tabs',
        },
        {
          name: 'Bottom tabs',
          path: '/components/bottom-tabs',
        },
        {
          name: 'Megamenu',
          path: '/components/megamenu',
        },
        {
          name: 'Hero',
          path: '/components/hero',
        },
        {
          name: 'Cards',
          path: '/components/megamenu',
        },
        {
          name: 'Tables',
          path: '/components/table',
        },
        {
          name: 'Scrollspy',
          path: '/components/scrollspy',
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
          path: '/components/number-input',
        },
        {
          name: 'Textarea',
          path: '/components/textarea',
        },
        {
          name: 'Radio',
          path: '/components/radio',
        },
        {
          name: 'Checkbox',
          path: '/components/checkbox',
        },
        {
          name: 'Switches',
          path: '/components/switches',
        },
        {
          name: 'Slider',
          path: '/components/slider',
        },
        {
          name: 'Date picker',
          path: '/components/date-picker',
        },
      ],
    },
  ]

  return (
    <StyledSidebar>
      <SidebarContent>
        {menuItems.map(item => (
          <React.Fragment key={JSON.stringify(item)}>
            <h4>{item.section}</h4>
            <ul>
              {item.children.map(child => (
                <li key={JSON.stringify(child)}>
                  <Link to={child.path}>{child.name}</Link>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </SidebarContent>
    </StyledSidebar>
  )
}

export default Sidebar
