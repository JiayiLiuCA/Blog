import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'

export const BlogPostTemplate = ({
  content,
  description,
  contentComponent,
  helmet,
  tags
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className='postify'>
              <p>{description}</p>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <section className='hero is-medium'>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body has-text-centered'>
          <div className='container'>
            <h1 className='title'>{post.frontmatter.title}</h1>
          </div>
        </div>
      </section>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}


export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
