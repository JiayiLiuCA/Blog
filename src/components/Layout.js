import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{'title'}</title>
        
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
