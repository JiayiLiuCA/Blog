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

    const src = window.URL.createObjectURL(
        dataURItoBlob(pattern.toCanvas().toDataURL())
    )

    return <img
            className='trianglify-image'
            src={src}//pattern.toCanvas().toDataURL()}
            alt='trianglify'
            aria-hidden='true' 
            />
})



export default Trianglify


function dataURItoBlob (dataURI) {
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1])
  
    // separate out the mime component
    var mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0]
  
    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length)
    var _ia = new Uint8Array(arrayBuffer)
    for (var i = 0; i < byteString.length; i++) {
      _ia[i] = byteString.charCodeAt(i)
    }
  
    var dataView = new DataView(arrayBuffer)
    var blob = new Blob([dataView], { type: mimeString })
    return blob
  }