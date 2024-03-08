import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import Store from './store'

import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'

import { homeLoader } from './route-loaders/'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                // loader: homeLoader,
            },
            {
                path: 'bag',
                element: <Bag />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={Store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
