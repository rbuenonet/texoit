import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Sidebar } from './components/molecules/Sidebar'

import DashboardPage from './pages/dashboard/dashboard'
import ListPage from './pages/list/list'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
  }
`

const ContainerGlobal = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`

const ContainerInternal = styled.div`
  flexgrow: 1;
  padding: 20px;
  overflow-x: auto;
  width: 100%;
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ContainerGlobal>
          <Sidebar />
          <ContainerInternal>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/list" element={<ListPage />} />
            </Routes>
          </ContainerInternal>
        </ContainerGlobal>
      </Router>
    </>
  )
}
