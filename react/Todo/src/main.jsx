import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home'
import Layout from './components/Layout/Layout'
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
)
