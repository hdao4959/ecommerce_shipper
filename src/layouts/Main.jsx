import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const MainLayout = () => {
  return (
    <div style={{
      height: "100vh",
    }}>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default MainLayout
