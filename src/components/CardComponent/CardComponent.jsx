import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardComponent({data}) {
  // console.log(data)

  return (
  <div style={{  display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', padding: '100px', margin: '0 auto'}}>
  { data &&
   data.map((item) => (
  <Card key={item?.id} style={{ width: '346px', marginBottom: '30px' }}>
  <Card.Img variant="top" src={item?.imageURL} />
  <Card.Body>
    <Card.Title style={{fontSize: '28px'}}>{item?.title}</Card.Title>
    <Card.Text>
    $ {item?.price}
    </Card.Text>
    <Button variant="dark">Buy now</Button>
  </Card.Body>
  </Card>
  ))}
  </div>
  )
}

export default CardComponent