import {useEffect, useState} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishItem from './components/DishItem'
import './App.css'

const App = () => {
  const [restaurantData, setRestaurantData] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [dishCounts, setDishCounts] = useState({})
  const [restaurantName, setRestaurantName] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await response.json()
      setRestaurantName(data[0].restaurant_name)
      setRestaurantData(data[0].table_menu_list)
    }

    getData()
  }, [])

  const increaseCount = id => {
    setDishCounts(prev => {
      const updated = {
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }

      setCartCount(cartCount + 1)

      return updated
    })
  }

  const decreaseCount = id => {
    if ((dishCounts[id] || 0) > 0) {
      setDishCounts(prev => ({
        ...prev,
        [id]: prev[id] - 1,
      }))

      setCartCount(cartCount - 1)
    }
  }

  if (restaurantData.length === 0) {
    return <h1 className="loader">Loading...</h1>
  }

  const activeCategory = restaurantData[activeTab]

  return (
    <div className="app-container">
      <Header restaurantName={restaurantName} cartCount={cartCount} />
      <CategoryTabs
        categories={restaurantData}
        activeTab={activeTab}
        changeTab={setActiveTab}
      />

      <div>
        {activeCategory.category_dishes.map(eachDish => (
          <DishItem
            key={eachDish.dish_id}
            dish={eachDish}
            count={dishCounts[eachDish.dish_id] || 0}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ))}
      </div>
    </div>
  )
}

export default App
