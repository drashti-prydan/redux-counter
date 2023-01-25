import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
// import { add } from "../redux/action/CounterAction";



function Counter() {
  // const [increment, setIncrement] = useState('2');
  const count = useSelector((state) => state.CounterReducer.count);
  // const dispatch = useDispatch();
  // console.warn("data",CounterData);
    return (
      <div>
        <Container>
          <div className="d-flex justify-content-center">
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