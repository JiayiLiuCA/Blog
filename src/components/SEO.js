import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:site_name" content={title} />
            <meta property="og:url" content="/" />
            <meta name="theme-color" content="#fff" />
        </Helmet>
    )
}

export default SEO