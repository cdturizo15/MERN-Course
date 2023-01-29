import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'

export const Login = () => {

    const algo = useContext(UserContext)
  return (
    <h1>Login {algo.hola}</h1>
  )
}
