import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { add, clear, sub, sweet } from "../redux/action/CounterAction"
// import isvalid from '.././redux/reducer/LoginReducer'
import LoginReducer from "../redux/reducer/rootReducer";

const Operation = () => {
    const dispatch = useDispatch();
    let data = useSelector((state => state.rootReducer.counterData.count))
    let isvalid = useSelector((state => state.rootReducer.LoginReducer.isvalid))
    // console.warn(data);
    const Add = () => {
        dispatch(add())
    }
    const Sub = () => {
        dispatch(sub())
    }
    const alert = () => {
        if (isvalid == false) {
            Swal.fire("please click on login button and  login..")
        } else {
            Swal.fire({ title: "This count's come from redux store:" + data })
        }
    }
    const authentication = (func) => {
        if (isvalid == false) {
            Swal.fire("please click on login button and  login..")
        } else {
            func();
        }
    }
    const Remove = () => {

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            
            showCancelButton: true,
            // fontsize: '14px',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   ),
                dispatch(clear())
            }

        })

    }
    return (
        <>
            <Container >
                <Row style={{ textAlign: 'center', marginTop: '10%' }}>
                    <Col>
                        <Button onClick={() => authentication(Add)}>ADD</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => authentication(Sub)}>SUB</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => authentication(alert)}>Sweet</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => authentication(Remove)}>clear</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Operation