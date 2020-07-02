import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import './styles/all.scss'


const Layout = ({ title, children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
