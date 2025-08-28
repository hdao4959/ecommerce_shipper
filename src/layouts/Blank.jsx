import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const BlankLayout = () => {
  return (
    <Container className='d-flex justify-content-between align-items-center' style={{
      height: "100vh"
    }}>
      <Outlet/>
    </Container>
  )
}

export default BlankLayout
