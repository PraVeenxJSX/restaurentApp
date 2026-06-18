const DishItem = ({dish, count, increaseCount, decreaseCount}) => {
  const {
    dish_id: dishId,
    dish_name: dishName,
    dish_price: dishPrice,
    dish_description: dishDescription,
    dish_calories: dishCalories,
    dish_image: dishImage,
    dish_Availability: dishAvailability,
    dish_Type: dishType,
    addonCat,
  } = dish

  return (
    <div className="dish-card">
      <div className="dish-info">
        <div className="dish-header">
          <div className={`food-type ${dishType === 2 ? 'veg' : 'non-veg'}`}>
            ●
          </div>

          <h2>{dishName}</h2>
        </div>

        <h3>SAR {dishPrice}</h3>

        <p className="description">{dishDescription}</p>

        {dishAvailability ? (
          <>
            <div className="counter">
              <button type="button" onClick={() => decreaseCount(dishId)}>
                -
              </button>

              <p>{count}</p>

              <button type="button" onClick={() => increaseCount(dishId)}>
                +
              </button>
            </div>

            {addonCat.length > 0 && (
              <p className="customization">Customizations available</p>
            )}
          </>
        ) : (
          <p className="not-available">Not available</p>
        )}
      </div>

      <div className="calories-container">
        <p className="calories">{dishCalories} calories</p>
      </div>

      <img src={dishImage} alt={dishName} className="dish-image" />
    </div>
  )
}

export default DishItem
