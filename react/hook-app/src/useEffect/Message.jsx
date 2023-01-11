import React from 'react'
import { useEffect, useState } from 'react'

export const Message = () => {

    const [Coords, setCoords] = useState({x: 0, y: 0})

    useEffect(()=>{

        const onMouseMove = ({x, y}) => {
          const coords = {x, y}
          setCoords(coords)
        }

        window.addEventListener('mousemove', onMouseMove)

        return() =>{
            window.removeEventListener('mousemove', onMouseMove)
        }
    },[])
  return (
    <>
        <h1>Usuario ya existe</h1>
        <span>Coordenadas de mouse: {JSON.stringify(Coords)}</span>
    </>
  )
}
