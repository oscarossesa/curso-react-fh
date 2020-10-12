import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)
  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h3>useState + useCounter</h3>
      <h6>BreakingBad Quotes Hooks</h6>
      {
        loading ? 
        (
          <div className="alert alert-info text-center">Loading...</div>
        ) :
        (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }
      <button 
        className="btn btn-primary"
        onClick={increment}
      >Siguiente quote</button>
    </div>
  )
}

export default MultipleCustomHooks
