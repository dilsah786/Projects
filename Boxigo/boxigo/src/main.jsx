import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './ContextAPi/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
  <App />
</DataProvider>,
)
