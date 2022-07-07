import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useStateValue } from '../../context/StateProvider';
import ChosenProducts from './ChosenProducts';


function ShoppingCart() {

  const [{ cartItems, user }, dispatch] = useStateValue();

  return (
    <Form >
      <div style={{ display: 'flex', padding: '100px', justifyContent: 'space-around', gap: '30px', flexWrap: 'wrap' }}>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

        </div>
        <div>
          {/* choosen products*/}
{cartItems && 
cartItems.map((item) => (
  <ChosenProducts key={item.id} item={item}/> 
))}

        </div>
      </div>
    {user ? (
        <div className="d-grid gap-2" >
        <Button  size="lg" variant="dark" type="submit">
          Submit
        </Button>
      </div>
    ) : (
      <div className="d-grid gap-2" >
      <Button  size="lg" variant="dark" type="submit">
        Login to submit
      </Button>
    </div>
    )}  
    
    </Form>
  )
}

export default ShoppingCart
