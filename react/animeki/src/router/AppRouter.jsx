import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../auth/pages/LoginPage'
import { CharacterRouter } from '../characters/router/CharacterRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={
                    <PrivateRoute>
                        <CharacterRouter/>
                    </PrivateRoute>
                }/>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>} ></Route>
            </Routes>
        </>
    )
}
