import { useState, useEffect } from 'react';
import NotSelected from './NotSelected';
import Selected from './Selected';

function Build(prop) {
  if (localStorage.getItem('inventory') === null) {
    const obj = {
      case: {},
      plate: {},
      pcb: {},
      stabilizers: {},
      switches: {},
      keycaps: {}
    }

    localStorage.setItem('inventory', JSON.stringify(obj));
  }

  const inventoryObj = JSON.parse(localStorage.getItem('inventory'));
  const [ inventory, setInventory ] = useState(inventoryObj);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);
    
  useEffect(() => {
    setInventory(JSON.parse(localStorage.getItem('inventory')));
  }, [])

  const addToCart = () => {
    const arr = [];
    for (const category in inventory) {
      if (inventory[category].selected) {
        const obj = {
          name: inventory[category].name,
          imgUrl: inventory[category].imgUrl,
          price: inventory[category].price,
          quantity: 1
        }
        arr.push(obj);
      }
    }
    prop.setCart(prop.cart.concat(arr));
    setInventory({
      case: {},
      plate: {},
      pcb: {},
      stabilizers: {},
      switches: {},
      keycaps: {}
    });
  }

  return (
    <div className='table'>
      <h1 className='header-build'>Keyboard Parts</h1>
      <table className='table-build'>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.case.selected
            ? <Selected 
                category={
                  {
                    _id: "6304071f0f9c881261a89c32",
                    name: 'Case'
                  }
                }
                item={inventory.case} 
                setInventory={setInventory}
              />
            : <NotSelected 
                category={
                  {
                    _id: "6304071f0f9c881261a89c32",
                    name: 'Case'
                  }
                } 
              />
          }
          {inventory.plate.selected
            ? <Selected 
                category={
                  {
                    _id: "630407270f9c881261a89c36",
                    name: 'Plate'
                  }
                } 
                item={inventory.plate} 
                setInventory={setInventory}
              />
            : <NotSelected 
                category={
                  {
                    _id: "630407270f9c881261a89c36",
                    name: 'Plate'
                  }
                } 
              />
          }
          {inventory.pcb.selected
            ? <Selected 
                category={
                  {
                    _id: '630407726dc6c612f78d829c',
                    name: 'PCB'
                  }
                } 
                item={inventory.pcb} 
                setInventory={setInventory}
              />
            : <NotSelected 
                category={
                  {
                    _id: '630407726dc6c612f78d829c',
                    name: 'PCB'
                  }
                } 
              />
          }
          {inventory.stabilizers.selected
            ? <Selected 
                category={
                  {
                    _id: '6304077c6dc6c612f78d82a0',
                    name: 'Stabilizers'
                  }
                } 
                item={inventory.stabilizers} 
                setInventory={setInventory}
              />
            : <NotSelected 
                category={
                  {
                    _id: '6304077c6dc6c612f78d82a0',
                    name: 'Stabilizers'
                  }
                } 
              />
          }
          {inventory.switches.selected
            ? <Selected
                category={
                  {
                    _id: '6304078f6dc6c612f78d82a4',
                    name: 'Switches'
                  }
                } 
                item={inventory.switches} 
                setInventory={setInventory}
              />
            : <NotSelected 
                category={
                  {
                    _id: '6304078f6dc6c612f78d82a4',
                    name: 'Switches'
                  }
                } 
              />
          }
          {inventory.keycaps.selected
            ? <Selected
                category={
                  {
                    _id: '6304079b6dc6c612f78d82a8',
                    name: 'Keycaps'
                  }
                }  
                item={inventory.keycaps} 
                setInventory={setInventory}
              />
            : <NotSelected 
                category={
                  {
                    _id: '6304079b6dc6c612f78d82a8',
                    name: 'Keycaps'
                  }
                } 
              />
          }
        </tbody>
      </table>
      <button onClick={addToCart} className='btn-cart'>Add To Cart</button>
    </div>
  );
}

export default Build;