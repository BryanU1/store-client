import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Case() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = 'https://keyboard-store-api.herokuapp.com/api/category/6304071f0f9c881261a89c32';
    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.items))
      .catch((err) => console.log(err));
    
  }, []);

  const itemList = items.map((item) => (
    <li key={item._id} className='item'>
      <Link to={`/shop/${item._id}`}>
        <img src={item.imgUrl} alt="case"></img>
        <h1>
          {item.name}
        </h1>
        <h2>
          ${parseFloat(item.price).toFixed(2)}
        </h2>
      </Link>
    </li>
  ));

  return (
    <div className='flex-container-row center'>
      <section>
        <ul className='side-nav'>
          <Link to='/shop/keyboard'>
            <li>Keyboard</li>
          </Link>
          <Link to='/shop/case'>
            <li className='selected'>Case</li>
          </Link>
          <Link to='/shop/plate'>
            <li>Plate</li>
          </Link>
          <Link to='/shop/pcb'>
            <li>PCB</li>
          </Link>
          <Link to='/shop/stabilizers'>
            <li>Stabilizers</li>
          </Link>
          <Link to='/shop/Switches'>
            <li>Switches</li>
          </Link>
          <Link to='/shop/Keycaps'>
            <li>Keycaps</li>
          </Link>
        </ul>
      </section>
      <div className='main-content'>
        <h1 className='header-shop'>Case</h1>
        <ul className='items-container'>
          {itemList}  
        </ul>
      </div>
    </div>
  );
}

export default Case;