import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function CategoryDetail() {
  const params = useParams();
  const [ category, setCategory ] = useState([]);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    const url = `https://keyboard-store-api.herokuapp.com/api/category/${params.id}`
    
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setCategory(json.category);
        setItems(json.items);
      })
      .catch(err => console.log(err));
  }, [])

  const handleClick = (e) => {
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
    const obj = JSON.parse(localStorage.getItem('inventory'));
    
    switch (category[0].name) {
      case 'Case': 
        obj.case.name = e.target.dataset.name;
        obj.case.imgUrl = e.target.dataset.imgurl;
        obj.case.price = Number(e.target.dataset.price);
        obj.case.category = 'Case';
        obj.case.selected = true;
        break;
      case 'Plate':
        obj.plate.name = e.target.dataset.name;
        obj.plate.imgUrl = e.target.dataset.imgurl;
        obj.plate.price = Number(e.target.dataset.price);
        obj.plate.category = 'Plate';
        obj.plate.selected = true;
        break;
      case 'PCB':
        obj.pcb.name = e.target.dataset.name;
        obj.pcb.imgUrl = e.target.dataset.imgurl;
        obj.pcb.price = Number(e.target.dataset.price);
        obj.pcb.category = 'PCB';
        obj.pcb.selected = true;
        break;
      case 'Stabilizers': 
        obj.stabilizers.name = e.target.dataset.name;
        obj.stabilizers.imgUrl = e.target.dataset.imgurl;
        obj.stabilizers.price = Number(e.target.dataset.price);
        obj.stabilizers.category = 'Stabilizers';
        obj.stabilizers.selected = true;
        break;
      case 'Switches':
        obj.switches.name = e.target.dataset.name;
        obj.switches.imgUrl = e.target.dataset.imgurl;
        obj.switches.price = Number(e.target.dataset.price);
        obj.switches.category = 'Switches';
        obj.switches.selected = true;
        break;
      case 'Keycaps':
        obj.keycaps.name = e.target.dataset.name;
        obj.keycaps.imgUrl = e.target.dataset.imgurl;
        obj.keycaps.price = Number(e.target.dataset.price);
        obj.keycaps.category = 'Keycaps';
        obj.keycaps.selected = true;
        break;
    }

    localStorage.setItem('inventory', JSON.stringify(obj));
  }

  const heading = category.map((value) => (
    <h1 key={value._id} className='header-build'>{value.name}</h1>
  ));

  const itemsList = items.map(item => (
    <tr key={item._id}>
      <td>
        <img src={item.imgUrl} alt='Keyboard Case'></img>
      </td>
      <td>{item.name}</td>
      <td>${parseFloat(item.price).toFixed(2)}</td>
      <td>
        <Link to='/build'>
          <button 
            className='btn-add'
            onClick={handleClick}
            data-name={item.name}
            data-imgurl={item.imgUrl}
            data-price={item.price}
          >
            Add
          </button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className='table'>
      {heading}
      <table className='table-detail'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {itemsList}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryDetail;