import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../components/DashBoard.css'

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

          <Col style={{backgroundColor:'lightgreen',height:"450px",borderRight:'2px solid black'}}>
          
          </Col>
        </Row>

      </div>
    
    </>
  )
}

export default DashBoard
