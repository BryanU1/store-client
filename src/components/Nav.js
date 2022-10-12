import { Link } from 'react-router-dom';

function Nav(prop) {
  const openCart = () => {
    prop.setDisplay(true);
  }
  return (
    <nav className="nav-bar">
      <div>  
        <Link to="/">
          <img src={require('../images/favicon.ico')} className='nav-brand'></img>
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
        <img src={require('../images/shopping-cart.png')} alt='Cart' className='img-cart' onClick={openCart}></img>
      </div>
    </nav>
  );
}

export default Nav;