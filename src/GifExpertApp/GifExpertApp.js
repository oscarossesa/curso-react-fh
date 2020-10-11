import React, { useState } from 'react'
import AddCategory from '../components/AddCategory'
import GifGrid from '../components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  // const handleAdd = (e) => {
  //   console.log(e.target.value)
  //   setCategories([e.target.value, ...categories])
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(cat => <GifGrid key={cat} category={cat} />)
        }
      </ol>
    </div>
  )
}

export default GifExpertApp
