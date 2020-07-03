import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Img from 'gatsby-image'
import PostList from '../components/PostList'
import logo from '../img/logo.png'


export default function IndexPage({ data }) {
    const tempoMarkings = [
        'Larghissimo', 'Adagissimo', 'Grave', 'Largo', 'Lento',
        'Larghetto', 'Adagio', 'Adagietto', 'Andante', 'Andantino',
        'Marcia moderato', 'Andante moderato', 'Moderato', 'Allegretto', 'Allegro moderato',
        'Allegro', 'Vivace', 'Vivacissimo', 'Allegrissimo', 'Presto', 'Prestissimo'
    ]
    return (
        <Layout>
            <section className="hero has-gatsby-img">
                <Img fluid={data.file.childImageSharp.fluid} />
                <Navbar />
                <div className="hero-body has-text-centered">
                    <div className="container is-size-5">
                        <img
                            style={{ width: '200px', height: '200px' }}
                            src={logo}
                            alt="logo"
                        />
                        {tempoMarkings.map(tempoMarking => (
                            <div className="hidden-text" style={{ color: "#000000" }}>
                                {tempoMarking}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-foot has-text-centered">
                    <svg viewBox="0 0 32 32" width="32" height="32">
                        <title>scroll down</title>
                        <path
                            fill="#fff"
                            d="M.045 8.443c0-.215.082-.43.246-.594.33-.33.86-.33 1.19 0L16 22.37 30.52 7.85c.33-.33.86-.33 1.19 0s.327.86 0 1.186L16.593 24.152c-.328.326-.86.326-1.188 0L.29 9.036c-.163-.163-.245-.378-.245-.593z"
                        />
                    </svg>
                </div>
            </section>
            <section className="section">
                <div className="container has-text-centered">
                    <div className="content is-size-4">
                        <p>
                            Welcome to my blog!
                        </p>
                    </div>
                </div>
            </section>
            <PostList posts={data.latestPosts} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        file(relativePath: { eq: "hero.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        latestPosts: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: {
                    templateKey: {eq : "blog-post"}
                }
            }
            limit: 5
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        date(formatString: "MMMM DD, YYYY")
                        tags
                    }
                }
            }
        }
    }
`