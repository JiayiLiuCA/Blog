import React from 'react'
import PostItem from './PostItem'


const PostList = React.memo(({ searchText, posts }) => {

    return (
        <section className='section'>
            <div className='container'>
                {posts.edges
                    .filter(edge => {
                        if (searchText) {
                            let frontmatter = edge.node.frontmatter
                            let lowerCaseSearchText = searchText.toLowerCase()
                            if (lowerCaseSearchText[0] === '#') {
                                //current searching tag
                                let searchTag = lowerCaseSearchText.slice(1)
                                return (edge.node.frontmatter.tags.includes(searchTag))
                            }
                            else {
                                let lowerCasePostTitle = frontmatter.title.toLowerCase()
                                let lowerCasePostDescription = frontmatter.description.toLowerCase()
                                return (lowerCasePostTitle.includes(lowerCaseSearchText)   ||
                                        lowerCasePostDescription.includes(lowerCaseSearchText)
                                )
                            }
                        }
                        else {
                            return true
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