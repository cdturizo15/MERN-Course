import React, { useEffect, useState, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Gif } from '../components/Gif'
import { getCharactersById } from '../helpers/getCharacterById'

export const CharacterPage = () => {

  const params = useParams()
  const { id } = params
  const [data] = useMemo(()=>getCharactersById(id),[id]) 
  const name = data.name.replace(/\s/g, '')
  const navigate = useNavigate()

  const onNavigate = ()=>{
    navigate(-1)
  }

  if (!data) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='row mt-5 p-3'>
      <div className='col-7'>
        <h3>{data.name}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Anime:</b> {data.animeName}</li>
          <li className='list-group-item'><b>Nick:</b> {data.nick}</li>
          <li className='list-group-item'><b>Habilidad:</b> {data.ability}</li>
        </ul>
        <Gif category={data.name} animeName={data.animeName} />
        <button onClick={()=> onNavigate()} className='btn btn-primary m-3'>Regresar</button>
      </div>
      <div className='col-5'>
        <img className='img-thumbnail profile-img-lg' src={'../src/assets/' + name + '.jpeg'} alt={data.name} />

      </div>
    </div>
  )
}
