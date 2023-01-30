import React from "react";

import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginAction } from "../redux/action/LoginAction";
import Counter from "./Counter";
import userData from '../userList.json'

function LogIn() {
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch();
    const navigate=useNavigate();
    // let data1 = useSelector((state) => state.LoginReducer.data1);
    // let data=state
    const intialvalues = {
        email: '',
        password: ''
    }
    const handelsubmitting = (e) => {
        console.warn('data check');
        e.preventDefault();
        let valid = userData.user.find(data => data.email === Email && data.password === password)
        if (valid) {
            Swal.fire("login Successfully...", "", "success")
            dispatch(LoginAction(valid))
            navigate('/')
        }
        else {
            setEmail("")
            setpassword("")
            Swal.fire("Oops...Invalid User....","","error")

        }
    }

    return (
        <Container style={{ margin: "5%", padding: "30px", justifyContent: 'center', display: 'flex', marginTop: '11%' }}>
            <Card style={{ width: '25%',height:'288px' }}>
                <Card.Header className="justify-content-center d-flex">log in </Card.Header>
                <Form style={{ margin: '20px' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                            value={Email}
                            required
                        //  className="form-control" 
                        //  id="email" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={e => {
                                setpassword(e.target.value);
                            }}
                            value={password}
                            required
                        />
                    </Form.Group>
                    <Button style={{marginLeft:'5.5%',position:'fixed',display:'flex',justifyItems:'center'}} variant="primary" type="submit" onClick={handelsubmitting}>
                        {/* () => dispatch(log_in(userData))}> */}

                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    )
}
export default LogIn