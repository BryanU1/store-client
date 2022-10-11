import { Link } from 'react-router-dom';

function Selected(prop) {
  const removeItem = (e) => {
    const inventory = JSON.parse(localStorage.getItem('inventory'));


    switch (e.target.dataset.category) {
      case 'Case':
        inventory.case.selected = false;
        break;
      case 'Plate':
        inventory.plate.selected = false;
        break;
      case 'PCB':
        inventory.pcb.selected = false;
        break;
      case 'Stabilizers':
        inventory.stabilizers.selected = false;
        break;
      case 'Switches':
        inventory.switches.selected = false;
        break;
      case 'Keycaps':
        inventory.keycaps.selected = false;
        break;
    }

    prop.setInventory(inventory)
  }

  const handleClick = () => {
    console.log(prop.category._id);
  }

  return (
    <tr>
      <td>{prop.item.category}</td>
      <td>
        <img src={prop.item.imgUrl} alt={prop.item.category}>
        </img>
      </td>
      <td>{prop.item.name}</td>
      <td>${parseFloat(prop.item.price).toFixed(2)}</td>
      <td>
        <Link to={`/catalog/category/${prop.category._id}`}>
          <i
            className='fas fa-edit'
            onClick={handleClick}
          >
          </i>
        </Link>
      </td>
      <td>
        <i
          className='fas fa-trash' 
          data-category={prop.item.category} 
          onClick={removeItem}
        >
        </i>
      </td>
    </tr>
  )
}

export default Selected;