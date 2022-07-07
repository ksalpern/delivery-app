import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useStateValue } from '../../context/StateProvider';
import { shops } from '../api/store';
import CardComponent from '../CardComponent/CardComponent';

function ShopsComponent() {
  const [filter, setFilter] = useState('Reserved');

 // useEffect(() => {}, [filter]);
 const [{ productItems }, dispatch] = useStateValue();

  return (
    <>
    <NavDropdown title="CHOOSE A SHOP" id="collasible-nav-dropdown" bg="light" variant="light">
   {shops &&
     shops.map(shop => (
        <NavDropdown.Item
         key={shop.id} 
         href="#action/3.1"
        onClick={() => setFilter(shop.urlParamName)}
        // `${filter === shop.urlParamName }`
        >
          {shop.name}
        </NavDropdown.Item>
   ))}
   </NavDropdown>
   <CardComponent data={productItems?.filter(n => n.shop === filter)}/>
   </>
  )
}

export default ShopsComponent;