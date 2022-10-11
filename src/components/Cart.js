import uniqid from 'uniqid';

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
    console.log(arr);
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
      <i className='fas fa-trash' onClick={removeItem} data-name={item.name}></i>
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