import React from 'react'
//import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'
import Trianglify from '../components/Trianglify'
import Utterances from '../components/Utterances'


export const BlogPostTemplate = ({
  content,
  description,
  tableOfContents,
  contentComponent,
  helmet,
  tags
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className='postify'>
              <p>{description}</p>
              {/*table of content*/}
              <div
                className='post-toc'
                dangerouslySetInnerHTML={{ __html: tableOfContents }}
              />
              <PostContent content={content} />
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div className='tags'>
                {tags.map(tag => (
                  <Link
                    key={tag}
                    className='tag is-info is-rounded'
                    to={`/archives`}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const BlogPost = ({ data, pageContext }) => {
  console.log(data);

  const { markdownRemark: post } = data
  const { next, previous } = pageContext
  console.log(next);
  console.log(previous);
  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
    >
      <section className='hero is-medium has-text-centered has-trianglify'>
        <Trianglify title={post.frontmatter.title} />
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{post.frontmatter.title}</h1>
          </div>
        </div>
        <div className='hero-foot'>
          <div className='post-hero-foot'>
            {post.frontmatter.date}
          </div>
        </div>
      </section>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tableOfContents={post.tableOfContents}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
      />
      <div className='section'>
        <div className='columns'>
          <div className='column'>
            {previous && (previous.frontmatter.templateKey === "blog-post") && (
              <Link
                className='is-block is-link-reverse has-text-weight-medium has-text-right has-text-centered-mobile'
                to={`/${previous.fields.slug}`}
              >
                <strong className='has-text-grey'>
                  Previous Blog
                  </strong>
                <p>{previous.frontmatter.title}</p>
              </Link>
            )}
          </div>

          <div
            className='has-background-grey-lighter is-hidden-mobile'
            style={{
              alignSelf: 'center',
              width: 10,
              height: 10,
              margin: '0 2em',
            }}
          />

          <div className='column'>
            {next && (next.frontmatter.templateKey === "blog-post") && (
              <Link
                className='is-block is-link-reverse has-text-weight-medium has-text-left has-text-centered-mobile'
                to={`/${next.fields.slug}`}
              >
                <strong className='has-text-grey'>
                  Next Blog
                </strong>

                <p>{next.frontmatter.title}</p>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Utterances slug={post.fields.slug} />
    </Layout >
  )
}


export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      tableOfContents
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
`
