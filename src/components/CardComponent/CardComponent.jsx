import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

function CardComponent({ data }) {
   console.log(data)
const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

const addToCart = () => {

dispatch({
  type : actionType.SET_CART_ITEMS,
  cartItems : items,
});
localStorage.setItem('cartItems', JSON.stringify(items)) //saves CART TO OUR LOCAL STORAGE
};

useEffect(() => {
  addToCart();
}, [items]);

  return (
    <div style={{  display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '100px'}}>
      {data ?
        data.map((item) => (
          <Card key={item?.id} style={{ width: '346px', marginBottom: '30px' }}>
            <Card.Img variant="top" src={item?.imageURL} />
            <Card.Body>
              <Card.Title style={{ fontSize: '28px' }}>{item?.title}</Card.Title>
              <Card.Text>
                $ {item?.price}
              </Card.Text>
              <Button
              onClick={() =>  setItems([...cartItems, item])}
              variant="dark">Buy now</Button>
            </Card.Body>
          </Card>
        ))
        : <Spinner animation="border" variant="secondary" />}
    </div>
  )
}

export default CardComponent