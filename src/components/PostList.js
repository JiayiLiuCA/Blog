import React from 'react'
import PostItem from './PostItem'


const PostList = React.memo(({posts}) => {
    
    return (
        <section className='section'>
            <div className='container'>
                {posts.edges.map(({ node: post }) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
})

export default PostList