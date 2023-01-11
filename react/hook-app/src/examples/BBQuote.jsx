import React from 'react'

export const BBQuote = ({quote, author}) => {
  return (
    <>
        <blockquote style={{display: 'flex'}} className='blockquote text-start'>
            <p className='mb-3'>{quote}</p>
            <footer className='blocquote-footer'>
                -{author}
            </footer>
        </blockquote>
    </>
  )
}
