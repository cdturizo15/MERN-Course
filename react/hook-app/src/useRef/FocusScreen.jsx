import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    const handleFocus = ()=>{
        inputRef.current.select()
    }
  return (
    <>
    <h1>Focus Screen</h1>
    <hr />
    <input ref={inputRef} type="text" placeholder='Nombre' className='form-control' />
    <button  className='btn btn-primary mt-3' onClick={handleFocus} >Set focus</button>
    </>
  )
}
