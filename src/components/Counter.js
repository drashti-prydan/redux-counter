import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { add } from "../redux/action/CounterAction";
import LogIn from "./LogIn"



function Counter() {
  // const [increment, setIncrement] = useState('2');
  const count = useSelector((state) => state.rootReducer.counterData.count);
  // const dispatch = useDispatch();
  // const location =useLocation();
  console.warn("data",count);
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center mt-4" style={{ fontSize: '30px' }}>
          {/* <input
          // className={styles.textbox}
          aria-label="Set increment"
          value={increment}
          onChange={e => setIncrement(e.target.value)}
        /> */}
          <span>{count}</span>
        </div>
      </Container>

    </div>
  );
}

export default Counter;