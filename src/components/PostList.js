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
                                //tag search
                                let lowerCaseSearchTag = lowerCaseSearchText.slice(1)
                                let lowerCasePostTags = frontmatter.tags.map(tag =>
                                    tag.toLowerCase()
                                )
                                return (lowerCasePostTags.includes(lowerCaseSearchTag))
                            }
                            else {
                                //title and description search
                                let lowerCasePostTitle = frontmatter.title.toLowerCase()
                                let lowerCasePostDescription = frontmatter.description.toLowerCase()
                                return (
                                    lowerCasePostTitle.includes(lowerCaseSearchText) ||
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