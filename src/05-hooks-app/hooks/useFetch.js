import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {

    // Este return es para realizar acciones al desmontar el componente.
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true, error: null })

    fetch(url)
      .then(resp => resp.json())
      .then(data => {

        setTimeout(() => { // Este setTimeout no es necesario. Es a modo de demostración.

          if (isMounted.current) {
            setState({
              loading: false,
              error: false,
              data
            })
          } else {
            console.log('setState no se ejecuto!') // Este else no es necesario. Es a modo de demostración.
          }
          
        }, 4000)
      })

  }, [url])

  return state
}
