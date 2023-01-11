import React from 'react'

export const SmallComponent = React.memo(({counter}) => {
    console.log('me volvi a renderizar')
  return (
    <>
        <small>{counter}</small>
    </>
  )
})
