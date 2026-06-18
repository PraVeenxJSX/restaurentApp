import {FaShoppingCart} from 'react-icons/fa'

const Header = ({restaurantName, cartCount}) => (
  <div className="header">
    <h1 className="logo">{restaurantName}</h1>

    <div className="cart-container">
      <p className="orders-text">My Orders</p>

      <div className="cart-icon-container">
        <FaShoppingCart size={28} />

        <span className="cart-count">{cartCount}</span>
      </div>
    </div>
  </div>
)

export default Header
