import Recipe from './Recipe'

const Recipes = ({ recipes, onDelete, onToggle }) => {
  return (
    <>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Recipes
