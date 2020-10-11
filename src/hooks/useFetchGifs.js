import { useState, useEffect } from 'react'
import { getFetchGifts } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  })

  const [images, setImages] = useState([])
  
  useEffect(() => {
    getFetchGifts(category)
      .then(imgs => 
        setstate({
          data: imgs,
          loading: false
        }))      
  }, [category])

  return state
}