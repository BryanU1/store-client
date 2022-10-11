import { Link } from 'react-router-dom';

function Nav(prop) {
  const openCart = () => {
    prop.setDisplay(true);
  }
  return (
    <nav className="nav-bar">
      <div>  
        <Link to="/">
          <img src={require('../images/favicon.ico')}></img>
        </Link>
        <ul>
          <Link to="/shop/keyboard">
            <li>Shop</li>
          </Link>
          <Link to="/build">
            <li>Build</li>
          </Link>
        </ul>
      </div>
      <div className='nav-cart'>
        <div id='cart-quantity'>{prop.totalCount}</div>
        <i className='fas fa-shopping-cart' onClick={openCart}></i>
      </div>
    </nav>
  );
}

export default Nav;