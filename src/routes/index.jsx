import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/Main'
import Home from '../pages/Home'
import BlankLayout from '../layouts/Blank'
import Login from '../pages/Auth/Login'
import ListDelivery from '../pages/Delivery/ListDelivery'
import DetailDelivery from '../pages/Delivery/DetailDelivery'

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: '/deliveries', element: <ListDelivery />
      },
      {
        path: '/deliveries/:id', element: <DetailDelivery />
      }
    ]
  }, {
    element: <BlankLayout />,
    children: [
      {
        path: '/login', element: <Login />
      }
    ]
  }
])

export default routes
