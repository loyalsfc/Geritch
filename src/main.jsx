import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Page from './pages/Page'
import Search from './pages/Search'
import MealPage from './pages/MealPage'
import SavedMeal from './pages/SavedMeal'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Login from './pages/Login'

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
      },
      {
        path: "/saves",
        element: <SavedMeal />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
