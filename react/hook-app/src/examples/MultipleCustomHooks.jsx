import React from 'react'
import { useFetch, useCounter } from '../hooks/index'
import { LoadingQuote } from './LoadingQuote'
import { BBQuote } from './BBQuote'


export const MultipleCustomHooks = () => {
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
        : <BBQuote quote={quote} author={author} />
    }
    <button disabled={isLoading} className='btn btn-primary' onClick={increment}>Get another quote</button>
    </>
  )
}
