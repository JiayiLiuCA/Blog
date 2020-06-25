import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PostList from '../components/PostList'
import PostItem from '../components/PostItem'

const ArchivesPage = ({ data: { posts } }) => {
    return (
        <Layout>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <div className='field'>
                        <div className='control is-large'>
                            <input
                                className='input is-large'
                                type='text'
                                placeholder='#'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <PostList posts={posts} />
        </Layout>
    )
}

export default ArchivesPage

export const archivesPageQuery = graphql`
    query ArchivesQuery {
        posts: allMarkdownRemark(
            sort: { fields: [frontmatter___date] }
            filter: {
                frontmatter: { templateKey: { eq: "blog-post" } }
            }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        tags
                    }
                }
            }
        }
    }
    `
