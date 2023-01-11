import React from 'react'
import { LayoutEx } from './LayoutEx'
import { LoadingQuote } from '../examples/LoadingQuote'
import { useCounter, useFetch } from '../hooks'

export const Layout = () => {

    const {counter, increment} = useCounter(1)
    const baseUrl = 'https://api.breakingbadquotes.xyz/v1/quotes/'+counter
    const {data, isLoading, hasError} = useFetch(baseUrl)

    const {quote, author} = !!data && data[0]
  return (
<>
    <h1>Breaking Bad Quotes</h1>
    <hr />

    {

        isLoading
        ? <LoadingQuote/>
        : <LayoutEx quote={quote} author={author} />
    }
    <button disabled={isLoading} className='btn btn-primary' onClick={increment}>Get another quote</button>
    </>
  )
}
