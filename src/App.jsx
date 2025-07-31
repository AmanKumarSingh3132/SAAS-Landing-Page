import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import ErrorBoundary from './components/ErrorBoundary'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
