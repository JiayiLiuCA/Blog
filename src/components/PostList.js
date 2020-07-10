import React from 'react'
import PostItem from './PostItem'


const PostList = React.memo(({ searchTag, posts }) => {
    console.log(posts);
    
    return (
        <section className='section'>
            <div className='container'>


                {posts.edges
                .filter(edge => {
                    if (searchTag) {
                        return (edge.node.frontmatter.tags.includes(searchTag));
                    }
                    else {
                        return true;
                    }
                    
                })
                .map(({ node: post }) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
})


export default PostList