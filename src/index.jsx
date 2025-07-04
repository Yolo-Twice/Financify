import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/about.jsx'
import NotFound from './components/notFound.jsx'
import Login from './components/login.jsx'
import { ToastContainer } from 'react-toastify'
import Profile from './components/profile.jsx'
import { AuthProvider } from './Effects/AuthContext.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <App /> },
  { path: "/profile", element: <Profile /> },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
