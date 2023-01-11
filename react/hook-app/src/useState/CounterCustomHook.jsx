import React from 'react'
import { useCounter } from '../hooks/useCounter'

export default function CounterCustomHook() {

  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <>
        <h1>Custom hook counter: {counter}</h1>
        <button onClick={increment} className='btn btn-primary m-3'>+1</button>
        <button onClick={reset} className='btn btn-danger m-3'>Reset</button>
        <button onClick={decrement} className='btn btn-primary m-3'>-1</button>
    </>
    
  )
}
