import React from 'react'
import { Navbar } from '../components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AllCharacterPage } from '../pages/AllCharacterPage'
import { MalePage } from '../pages/MalePage'
import { FemalePage } from '../pages/FemalePage'
import { SearchPage } from '../pages/SearchPage'
import { CharacterPage } from '../pages/CharacterPage'
import { SearchInput } from '../components/SearchInput'
import { CharacterProvider } from '../context/CharacterProvider'

export const CharacterRouter = () => {
    return (
        <>
            <Navbar />
            <CharacterProvider>
                <Routes>
                    <Route path='/' element={<AllCharacterPage />} ></Route>
                    <Route path='/*' element={<Navigate to={'/'} />} ></Route>
                    <Route path='female' element={<FemalePage />} ></Route>
                    <Route path='male' element={<MalePage />} ></Route>
                    <Route path='character/:id' element={<CharacterPage />} ></Route>
                    <Route path='search/:name' element={<SearchPage />} ></Route>
                </Routes>
            </CharacterProvider>
        </>
    )
}
