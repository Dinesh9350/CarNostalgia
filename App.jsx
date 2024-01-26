import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Buy from './components/Buy'
import Error from './components/Error'
import Login from './components/Login'
import Sell from './components/Sell'
import CarDetail from './components/CarDetail'
import Support from './components/Support'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/buy',
        element: <Buy />,
      },
      {
        path: '/sell',
        element: <Sell />,
      },
      {
        path: '/support',
        element: <Support />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/car/:id',
        element: <CarDetail />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
