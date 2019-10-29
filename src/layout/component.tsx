import * as React from 'react'
import styled from 'styled-components'

// Components
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'

const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  height: 100%;
  padding: 30px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default ({ children }: any) => (
  <Wrapper>
    <Header />
    <Container>
      <Sidebar />
      <PageContent>{children}</PageContent>
    </Container>
  </Wrapper>
)
