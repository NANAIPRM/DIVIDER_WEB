import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register/Register'

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}
