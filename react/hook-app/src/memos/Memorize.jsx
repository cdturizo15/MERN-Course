import React from 'react'
import { useCounter } from '../hooks'
import { SmallComponent } from './SmallComponent'
import { useState } from 'react'

export const Memorize = () => {

    const {counter, increment} = useCounter(1)
    const [show, setshow] = useState(true)
    
  return (
    <>
    <h1>Counter: <SmallComponent counter={counter} /></h1>
    <hr />
    <button onClick={increment} className='btn btn-primary'>+1</button>
    <button onClick={()=>setshow(!show)} className='btn btn-outline-primary ms-3' >Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
