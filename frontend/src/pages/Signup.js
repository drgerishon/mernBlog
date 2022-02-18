import React, {useState} from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignup(e){
        e.preventDefault();
        axios.post('http://localhost:5000/users', {email, password})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justfy-content-center" >
                    <Form className="signup-form" onSubmit={handleSignup}>
                    <h1 className="text-center">Sign Up</h1>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else
                             </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value ={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Sign Up</Button>
                            <div className="py-4"> 
                                <p className="text-center">Already have an account?
                                <Link to ="/login">Login</Link>
                                </p>
                            </div>
                    </Form>
                </Col>
                <Col md={5} className="signup-bg-container">

                </Col>
            </Row>
        </Container>
    )
}


export default Signup
