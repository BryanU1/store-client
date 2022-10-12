import uniqid from 'uniqid';
import { ReactComponent as YourSvg } from '../images/trash.svg';

function Cart(prop) {
  const closeCart = () => {
    prop.setDisplay(false);
  }

  const handleChange = (e) => {
    const arr = JSON.parse(localStorage.getItem('cart'));
    for (const item of arr) {
      if (item.name === e.target.dataset.name) {
        item.quantity = Number(e.target.value);
      }
    }
    prop.setCart(arr);
  }

  const removeItem = (e) => {
    const arr = prop.cart.filter(item => {
      return item.name !== e.target.dataset.name;
    })
    prop.setCart(arr);
  }

  const cartList = prop.cart.map((item) => 
    <li key={uniqid()} className='cart-item'>
      <img src={item.imgUrl} className='cart-img'></img>
      <div className='cart-detail'>
        <h1>{item.name}</h1>
        <p>${parseFloat(item.price).toFixed(2)}</p>
        <div>
          <label htmlFor='quantity'>Quantity:</label>
          <input type='number' defaultValue={item.quantity} min='1' max='100' id='quantity' onChange={handleChange} data-name={item.name}></input>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={removeItem} data-name={item.name}>
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </li>
  )

  const handleCheckout = () => {
    prop.setCart([])
  }

  let emptyCart;
  if (!prop.totalCount) {
    emptyCart = <h1 className='cart-header'>Your Shopping Cart Is Empty</h1>
  }

  return (
    <div className={prop.display ? 'modal' : 'modal hidden'}>
      <div className='cart'>
        <span className='close' onClick={closeCart}>
          &times;
        </span>
        {emptyCart}
        <ul className='item-list'>
          {cartList}
        </ul>
        <p className='cart-price'>Total Price: ${prop.totalPrice}</p>
        <button className='checkout-btn' onClick={handleCheckout}>Proceed to checkout</button>
      </div>
    </div>
  )
}

export default Cart;