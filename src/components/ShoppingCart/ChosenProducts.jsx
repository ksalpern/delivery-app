import React from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';

function ChosenProducts() {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem' }}>
        <div > 
        <Card.Img  variant="top"
          src={"https://firebasestorage.googleapis.com/v0/b/delivery-app-a0a7f.appspot.com/o/Images%2F1657129609431-pants9.jpg?alt=media&token=46d5738c-ac68-4f14-a481-ddf046e5e1b8"}
        />
        </div>
        <Card.Body>
          <Card.Title>Pants</Card.Title>
          <Card.Text>$ 79</Card.Text>
        </Card.Body>
        <Card.Footer style={{display:' flex', justifyContent: 'flex-end', gap: '10px'}}>
        <Button variant="dark" type="submit">
            -
          </Button>
          <span style={{fontSize: '16px'}}> 1 </span>
          <Button variant="dark" type="submit">
            +
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ChosenProducts
