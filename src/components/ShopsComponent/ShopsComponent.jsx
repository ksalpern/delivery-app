import React, { useState } from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { shops } from '../api/store'

function ShopsComponent() {
  const [filter, setFilter] = useState('Reserved');
  return (
   {shops && shops.map(shop => (
    <NavDropdown title=">" id="collasible-nav-dropdown" bg="light" variant="light">
    <NavDropdown.Item href="#action/3.1">Bershka</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Oodji</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">H&M</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
   ))}
  )
}

{/* <Card>
<Card.Header>
  <Nav variant="tabs" defaultActiveKey="#first">
    <Nav.Item>
      <Nav.Link href="#first">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</Card.Header>
<Card.Body>
  <Card.Title>Special title treatment</Card.Title>
  <Card.Text>
    With supporting text below as a natural lead-in to additional content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}

export default ShopsComponent