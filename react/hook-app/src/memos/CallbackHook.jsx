import React from 'react'
import { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setcounter] = useState(1)
    const increase = useCallback(
      () => {
        setcounter((c)=>c+1)      
      },
      [],
    )
    
    
  return (
    <>
        <h1>use callback hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={increase} />

    </>
  )
}
