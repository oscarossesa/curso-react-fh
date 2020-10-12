import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import './index.css'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map(cat => <GifGrid key={cat} category={cat} />)
        }
      </ol>
    </div>
  )
}

export default GifExpertApp
