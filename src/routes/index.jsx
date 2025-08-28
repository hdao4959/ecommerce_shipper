import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/Main'
import Home from '../pages/Home'
import ListOrder from '../pages/ListOrder/index'
import BlankLayout from '../layouts/Blank'
import Login from '../pages/Auth/Login'

const routes = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        index: true, element: <Home/>
      }, {
        path: '/orders', element: <ListOrder/>
      }
    ]
  }, {
    element: <BlankLayout/>,
    children: [
      {
        path: '/login', element: <Login/>
      }
    ]
  }
])

export default routes
