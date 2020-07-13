import React from 'react'
import Footer from './Footer'
import './styles/all.scss'
import SEO from './SEO'


const Layout = ({ title, description, children }) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
