import { useState } from 'react'

const AddRecipe = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [country, setCountry] = useState('')
  const [Favorite, setFavorite] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a Recipe')
      return
    }

    onAdd({ text, ingredients, origin, Favorite })

    setText('')
    setIngredients('')
    setCountry('')
    setFavorite(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Recipe Name</label>
        <input
          type='text'
          placeholder='Add Name of Recipe'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Ingredients</label>
        <input
          type='text'
          placeholder='Add Ingredients'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Country</label>
        <input
          type='text'
          placeholder='Add Country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Favorite</label>
        <input
          type='checkbox'
          checked={Favorite}
          value={Favorite}
          onChange={(e) => setFavorite(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Recipe' className='btn btn-block' />
    </form>
  )
}

export default AddRecipe