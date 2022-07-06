import React from 'react'
import { useStateValue } from '../../context/StateProvider';
import CardComponent from '../CardComponent/CardComponent'

function Products(props) {
  const [{ productItems }, dispatch] = useStateValue();
  return (
    <div>
      <CardComponent  data={productItems?.filter(n => n.shop === 'Reserved')} />
    </div>
  )
}

export default Products
