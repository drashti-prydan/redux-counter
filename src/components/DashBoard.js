import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../components/DashBoard.css'
import fly from '../image/butterfly.png'

function DashBoard() {
  return (
    <>
    <Container className="section">
     <h1>This is a DashBoard</h1>
    </Container>
    <hr/>
   
      <div>
        <Row>
          <Col style={{backgroundColor:'lightblue',height:"450px",borderRight:'2px solid black'}}>
          </Col>

          <Col style={{height:"450px",}}>
          <Image src={fly} style={{backgroundColor:'lightpink'}}/>
          </Col>
        </Row>

      </div>
    
    </>
  )
}

export default DashBoard
