import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-div'>
      <div>  
        <h1>Keychron K2</h1>
        <Link to='/shop/keyboard'>
          <button>Shop Now</button>
        </Link>
      </div>
      <img src={'https://images.squarespace-cdn.com/content/v1/5f48959a7b41397a9d9c497a/1618296609717-D7UVS0U5XCA1G5YY48DB/IMG_3110.jpg'}>
      </img>
    </div>
  );
}

export default Home;