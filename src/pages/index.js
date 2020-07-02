import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Img from 'gatsby-image'


export default function IndexPage({ data }) {
    return (
        <Layout>
            <section className="hero has-gatsby-img">
                <Img fluid={data.file.childImageSharp.fluid} />
                <Navbar />
            </section>
            <div>Hello World</div>
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
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`