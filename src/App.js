import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Keyboard from './components/Keyboard';
import Case from './components/Case';
import Plate from './components/Plate'
import PCB from './components/PCB';
import Stabilizers from './components/Stabilizers';
import Switches from './components/Switches';
import Keycaps from './components/Keycaps';
import Build from './components/Build';
import ItemDetail from './components/ItemDetail';
import CategoryDetail from './components/CategoryDetail';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [ display, setDisplay ] = useState(false);
  const [ totalPrice, setTotalPrice ] = useState(JSON.parse(localStorage.getItem('total price')) || 0);
  const [ totalCount, setTotalCount ] = useState(JSON.parse(localStorage.getItem('total count')) || 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    let count = 0;
    let value = 0;
    for (let i = 0; i < cart.length; i++) {
      value += cart[i].price * cart[i].quantity;
      count += cart[i].quantity;
    }

    setTotalPrice(parseFloat(value).toFixed(2));
    setTotalCount(count);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('total price', JSON.stringify(totalPrice));
  }, [totalPrice]);

  useEffect(() => {
    localStorage.setItem('total count', JSON.stringify(totalCount));
  }, [totalCount]);

  return (
    <Router>
      <div className="App flex-container">
        <Nav 
          setDisplay={setDisplay}
          totalCount={totalCount}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route 
            path="/shop/keyboard"
            exact 
            element={<Keyboard />} 
          />
          <Route 
            path="/shop/case"  
            exact
            element={<Case />}
          />
          <Route 
            path="/shop/plate"
            exact
            element={<Plate />}
          />
          <Route 
            path="/shop/pcb"  
            exact
            element={<PCB />}
          />
          <Route 
            path="/shop/Stabilizers"  
            exact
            element={<Stabilizers />}
          />
          <Route 
            path="/shop/Switches"  
            exact
            element={<Switches />}
          />
          <Route 
            path="/shop/Keycaps"  
            exact
            element={<Keycaps />}
          />
          <Route 
            path="/shop/:id" 
            element={<ItemDetail setCart={setCart} cart={cart} />} 
          />
          <Route 
            path="/build" 
            exact 
            element={<Build setCart={setCart} cart={cart} />} 
          />
          <Route 
            path="/catalog/category/:id"
            element={<CategoryDetail />}
          />
        </Routes>

        <Cart 
          display={display}  
          setDisplay={setDisplay}
          cart={cart}
          setCart={setCart}
          totalPrice={totalPrice}
          totalCount={totalCount}
        />
      </div>
    </Router>
  );
}

export default App;
