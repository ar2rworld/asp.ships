import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Ships from './routes/ships/index.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <p>Sorry =(</p>
    },
    {
        path: "/ships",
        element: <Ships />,
        errorElement: <p>Sorry =((</p>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
