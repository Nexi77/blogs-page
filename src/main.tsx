import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './assets/styles/variables.scss'
import './assets/styles/global.scss'
import './assets/styles/utils.scss'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
