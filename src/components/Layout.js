import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import {graphql, useStaticQuery} from 'gatsby'
import './all.sass'


const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
