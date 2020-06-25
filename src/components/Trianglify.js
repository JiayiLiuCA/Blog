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
    return <img
            className='trianglify-image'
            src={pattern.toCanvas().toDataURL()}
            alt='trianglify'
            aria-hidden='true' 
            />
})



export default Trianglify
