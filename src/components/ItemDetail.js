import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetail(prop) {
  const params = useParams();
  const [data, setData] = useState({});
  const [ quantity, setQuantity ] = useState(1);

  useEffect(() => {
    const url = `https://keyboard-store-api.herokuapp.com/api/item/${params.id}`;
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const obj = JSON.parse(text);
        setData(obj);
      })
      .catch(err => console.log(err));
  }, [])

  const handleClick = () => {
    const obj = {
      name: data.name,
      imgUrl: data.imgUrl,
      price: data.price,
      quantity: quantity
    }
    prop.setCart(prop.cart.concat(obj));
  }

  const handleChange = (e) => {
    setQuantity(Number(e.target.value))
  }

  return (
    <div className='container-detail'>
      <img src={data.imgUrl} alt='keyboard' className='img-detail'></img>
      <div>
        <h1 className='header-detail'>{data.name}</h1>
        <p>${parseFloat(data.price).toFixed(2)}</p>
        <form>
          <label htmlFor='quantity'>Quantity:</label>
          <input 
            type='number' 
            min='1' 
            max='99' 
            id='quantity'
            defaultValue='1'
            onChange={handleChange}
          >
          </input>
        </form>
        <button onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
    
  )
}

export default ItemDetail;