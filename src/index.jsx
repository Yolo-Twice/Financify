import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/about.jsx'
import NotFound from './components/notFound.jsx'
import Login from './components/login.jsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {path:"/",element: <App/>},
  {path:"/about",element: <About/>},
  {path:"*",element:<NotFound/>},
  {path:"/login",element:<Login/>},

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    <RouterProvider router={router}/>
  </StrictMode>,
)
