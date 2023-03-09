import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Page from './pages/Page'
import Search from './pages/Search'
import MealPage from './pages/MealPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/page",
        element: <Page />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/meal/:mealId",
        element: <MealPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
