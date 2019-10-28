import * as React from 'react'
import styled from 'styled-components'

// Components
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const PageContent = styled.main`
  display: flex;
  width: calc(100% - 200px);
  height: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export default ({ children }: any) => (
  <Wrapper>
    <Header />
    <Sidebar />
    <PageContent>{children}</PageContent>
  </Wrapper>
)
