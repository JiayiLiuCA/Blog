import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />

            <link
                rel='icon'
                type='image/png'
                sizes={'36x36'}
                href={withPrefix(`/img/favicon/favicon-36.png`)}
            />

            <meta property="og:site_name" content={title} />
            <meta property="og:url" content="/" />
            <meta name="theme-color" content="#fff" />
        </Helmet>
    )
}

export default SEO