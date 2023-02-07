import Counter from "./other_componets/Counter";
import Operation from "./Operation";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import axios from "axios";
import UserCard from "./UserCard";
import "./User.css";
// import{SideNav} from 'react-bootstrap'

function Home() {
  const [user, setuser] = useState([]);
  const GetAllUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.warn(res);
        const GetUser = res.data;
        setuser(res.data);
        // console.warn(res);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  // console.warn('Users',user);
  useEffect(() => {
    GetAllUser();
  }, []);
  return (
    <Container>
      <div>
      <h2>this is home page </h2>
      </div>

      <div className="gridcontainer">
        {user.map((data) => (
          <UserCard key={data.id} data={data} />
        ))}
      </div>
      {/* <Card>
        <div key={data.id}>
          <h3>{user.name}</h3>
        </div>
      </Card> */}
    </Container>
  );
=======
import React from "react";
// import{SideNav} from 'react-bootstrap'

function Home() {
    return (
        <>
        {/* <Slider></Slider> */}
        </>
    )
>>>>>>> parent of ef383104 (create pages)
}
export default Home;