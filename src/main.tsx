import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom"
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { router } from "./config/router"
import "@/assets/styles/styles.scss"
import { queryClient } from '@/config/react-query'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
