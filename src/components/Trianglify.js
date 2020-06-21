import React from 'react'
import trianglify from 'trianglify'

const Trianglify = React.memo(({ title }) => {
    if (typeof window === 'undefined') {
        return null
    }
    const pattern = trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        seed: title
    })
    console.log(pattern);
    return <img className='trianglify-image' src={pattern.toCanvas().toDataURL()} aria-hidden='true' />
})



export default Trianglify
