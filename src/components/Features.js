import React from "react";
// import { Card, Button } from "react-bootstrap";
import redux from "../image/redux.svg";
import dp from "../image/download.jpeg";
import FeaturesCard from "./other_componets/FeaturesCard";
import { Col, Row } from "react-bootstrap";

function Features() {
  return (
    <>
      <Row className="justify-content-center d-inline-flex"
      //  style={{textAlign:'center'}}
       >
        <Col className="lg-4 md-8 sm-12">
          <FeaturesCard
            Img={dp}
            Title={"Flower"}
            Text={"Rose"}
            color={"baby pink"}
            Link={"https://reactjs.org/docs/getting-started.html"}
          />
        </Col>
        <Col  className="lg-4 md-8 sm-12">
          <FeaturesCard
            Img={redux}
            Title={"Redux"}
            Text={"Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. "}
            // color={"baby pink"}
            Link={"https://redux.js.org/"}
          />
        </Col>
      </Row>
    </>
  );
}

export default Features;
