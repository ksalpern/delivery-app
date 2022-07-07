import React from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';

function ChosenProducts({item}) {

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
         <Card.Text>${item.price}</Card.Text>
       </Card.Body>
       <Card.Footer style={{display:' flex', justifyContent: 'flex-end', gap: '10px'}}>
       <Button variant="dark" type="submit">
           -
         </Button>
         <span>{item.qty}</span>
         <Button variant="dark" type="submit">
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
}

export default ChosenProducts
