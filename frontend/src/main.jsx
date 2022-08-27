import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import "react-windows-ui/config/app-config.css";
import "react-windows-ui/dist/react-windows-ui.min.css";
import "react-windows-ui/icons/fonts/fonts.min.css";
const container = document.getElementById('root')

const root = createRoot(container)


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
