import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function FeaturesCard(props) {
  // const handel={
  //   onclick,
  // }
  
  return (
    <>
      <div>
        {/* <h3>Demo</h3> */}
        <div className="m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={props.Img}
              style={{ width: "238px", height: "165px" }}
            />
            <Card.Body>
              <Card.Title>{props.Title}</Card.Title>
              <Card.Text>
                {/* <li>Alstroemeria</li>
              <li>Calla Lily</li>
              <li>Daisy</li>
              <li>Gardenia</li>
            <li>Carnation</li> */}
                <p><b>Use:</b>&nbsp;&nbsp;{props.Text}</p>
                {/* <li><b>Colour:</b>&nbsp;&nbsp;{props.color}</li> */}
              </Card.Text>
              <Button variant="primary">
                <Link to={props.Link}target={"_blank"} style={{color:'white',justifyContent:'center',display:'inline'}}>More Details</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FeaturesCard;
