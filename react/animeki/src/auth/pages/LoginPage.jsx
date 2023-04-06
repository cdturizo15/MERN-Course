import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  const onLogin = () => {
    context.login('Bycriss')
    const lastpath = localStorage.getItem('lastPath') || '/'
    navigate(lastpath,{replace: true})
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <hr />
      <button onClick={()=>onLogin()} className='btn btn-primary' >Ingresar</button>
    </div>
  )
}
