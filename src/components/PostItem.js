import React from 'react'
import { Link } from 'gatsby'

const PostItem = React.memo(({ post }) => {
    return (
        <div className='box content'>
            <p>
                <Link className='is-link-reverse' to={`/${post.fields.slug}`}>
                    <strong>{post.frontmatter.title}</strong>
                </Link>
                <span>&bull; </span>
                <small>{post.frontmatter.date}</small>
            </p>
            <p>{post.frontmatter.description}</p>

            <p className='tags'>
                {post.frontmatter.tags.map(tag => (
                    <Link
                        key={tag}
                        className='tag is-info is-rounded'
                        to={`/archives`}
                        state={{ searchText: `#${tag}` }}
                    >
                        #{tag}
                    </Link>
                ))}
            </p>
        </div>
    )
})

export default PostItem