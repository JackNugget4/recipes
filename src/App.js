import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Recipes from './components/Recipes'
import AddRecipe from './components/AddRecipe'
import About from './components/About'

const App = () => {

  const [showAddRecipe, setShowAddRecipe] = useState(false)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes()
      setRecipes(recipesFromServer)
    }

    getRecipes()
  }, [])

  const fetchRecipes = async () => {
    const res = await fetch('http://localhost:5000/recipes')
    const data = await res.json()

    return data
  }

  const fetchRecipe = async (id) => {
    const res = await fetch(`http://localhost:5000/recipes/${id}`)
    const data = await res.json()

    return data
  }

  const addRecipe = async (recipe) => {
    const res = await fetch('http://localhost:5000/recipes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })

    const data = await res.json()

    setRecipes([...recipes, data])

    
  }

  
  const deleteRecipe = async (id) => {
    const res = await fetch(`http://localhost:5000/recipes/${id}`, {
      method: 'DELETE',
    })
    
    res.status === 200
      ? setRecipes(recipes.filter((recipe) => recipe.id !== id))
      : alert('Error Deleting This Recipe')
  }

  
  const toggleFavorite = async (id) => {
    const FavoriteToToggle = await fetchRecipe(id)
    const updFavorite = { ...FavoriteToToggle, Favorite: !FavoriteToToggle.Favorite }

    const res = await fetch(`http://localhost:5000/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updFavorite),
    })

    const data = await res.json()

    setRecipes(
      Recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, Favorite: data.Favorite } : recipe
      )
    )
  }

  
  return (
    
    <Router>
            
      <div className='container'>
        <Header
          onAdd={() => setShowAddRecipe(!showAddRecipe)}
          showAdd={showAddRecipe}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddRecipe && <AddRecipe onAdd={addRecipe} />}
                {recipes.length > 0 ? (
                  <Recipes
                    recipes={recipes}
                    onDelete={deleteRecipe}
                    onToggle={toggleFavorite}
                  />
                ) : (
                  'No Recipes To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App



