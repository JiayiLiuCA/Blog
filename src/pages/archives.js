import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PostList from '../components/PostList'

const ArchivesPage = ({ data: { posts } }) => {
    //console.log(posts.edges);
    const [searchTag, setSearchTag] = useState('')
    return (
        <Layout title="Archives" description="Archives Page of this Blog">
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <div className='field'>
                        <div className='control is-large'>
                            <input
                                className='input is-large'
                                type='text'
                                value={searchTag}
                                onChange={e =>
                                    setSearchTag(e.currentTarget.value)
                                }
                                placeholder="#SearchTag"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <PostList searchTag={searchTag} posts={posts} />
        </Layout>
    )
}

export default ArchivesPage

export const archivesPageQuery = graphql`
    query ArchivesQuery {
        posts: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
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
