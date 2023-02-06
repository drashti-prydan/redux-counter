import { Button, Card, Col, Row } from "react-bootstrap";
import dp from "../image/user.jpeg";
import './User.css'
const UserCard = ({ data }) => {
  return (
    <>
      <Row >
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={dp}
              style={{ backgroundColor: "black" }}
            />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <b>phone:</b> {data.phone}
              </Card.Text>
              {/* <b> Address Details:</b> */}
              <Card.Text>
                <b>email:</b> {data.email}
              </Card.Text>

              <Card.Text>
                <b> Address Details:</b> {data.address.street},{" "}
                {data.address.suite}, {data.address.city},{" "}
                {data.address.zipcode}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserCard;
