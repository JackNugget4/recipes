import { FaTimes } from 'react-icons/fa'

const Recipe = ({ recipe, onDelete, onToggle }) => {
  return (
    <div
      className={`recipe ${recipe.Favorite && 'Favorite'}`}
      onDoubleClick={() => onToggle(recipe.id)}
    >
      <h3>
        {recipe.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(recipe.id)}
        />
      </h3>
      <p>
        From {recipe.country}     (Ingredients: {recipe.ingredients} )
      </p>
    </div>
  )
}

export default Recipe
