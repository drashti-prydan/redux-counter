import React from 'react'
import { Card,Button } from 'react-bootstrap'
import cardimg from '../image/pexels-min-an-906150.jpg'
function Features() {
  return (
    <div>
      <h3>
        
      </h3>
      <div className='m-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={cardimg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href='/'>Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Features
