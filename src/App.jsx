import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import Redirectlink from './pages/redirect-link'
import UrlProvider from './context'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<Redirectlink/>
      }

    ]
  }
])

function App() {

  return (
  <UrlProvider>
  <RouterProvider router={router}/>
  </UrlProvider>
  )
}

export default App
