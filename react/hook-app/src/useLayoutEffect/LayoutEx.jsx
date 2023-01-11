import React, { useRef } from 'react'
import { useLayoutEffect, useState } from 'react';
export const LayoutEx = ({quote, author}) => {
  const pRef = useRef();
  const [size, setSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
      const {width, height} = pRef.current.getBoundingClientRect()
      setSize({width, height})
  }, [quote])

  return (
    <>
        <blockquote style={{display: 'flex'}} className='blockquote text-start'>
            <p ref={pRef} className='mb-3'>{quote}</p>
            <footer className='blocquote-footer'>
                -{author}
            </footer>
            <code>My dimensions: {JSON.stringify(size)}</code>
        </blockquote>
    </>
  )
}
