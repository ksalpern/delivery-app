import React, { useEffect, useState } from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
let items = [];

function ChosenProducts({item, setFlag, flag}) {

const [qty, setQty ] = useState(item.qty);
const [{ cartItems, total }, dispatch] = useStateValue();

const cartDispatch = () => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  dispatch({
    type: actionType.SET_CART_ITEMS,
    cartItems: items,
  });
};




const updateQty = (action, id) => {
  if (action === "add") {
    setQty(qty + 1);
    cartItems.map((item) => {
      if (item.id === id) {
        item.qty += 1;
        setFlag(flag + 1);
      }
    });
    cartDispatch();
  } else {
    // initial state value is one u need to check if 1 then remove it
    if (qty === 1) {
      items = cartItems.filter((item) => item.id !== id);
      setFlag(flag + 1);
      cartDispatch();
    } else {
      setQty(qty - 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty -= 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    }
  }
};

useEffect(() => {
  items = cartItems;
}, [qty, items]);

  return (
    <div>
     {item && item > 0 ? (
       <Card border="dark" style={{ width: '18rem' }}>
       <div > 
       <Card.Img  variant="top"
         src={item.imageURL}
       />
       </div>
       <Card.Body>
         <Card.Title>{item.title}</Card.Title>
         <Card.Text>$ {parseFloat(item?.price) * qty}</Card.Text>
       </Card.Body>
       <Card.Footer style={{display:' flex', justifyContent: 'flex-end', gap: '10px'}}>
       <Button
          onClick={() => updateQty("remove", item?.id)}
        variant="dark" type="submit">
           -
         </Button>
         <span>{qty}</span>
         <Button 
            onClick={() => updateQty("add", item?.id)}
         variant="dark" type="submit">
           +
         </Button>
       </Card.Footer>
     </Card>
     ) : (
      <Card border="dark" style={{ width: '18rem' }}>   
      <Card.Img  variant="top"
        src={'https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png'}
      />
    </Card>
     )}
    </div>
  )
};

export default ChosenProducts;
