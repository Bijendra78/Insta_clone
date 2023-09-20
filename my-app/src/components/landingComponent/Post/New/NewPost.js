import React, { useEffect, useState } from "react";
import icon from "../../../../images/icon.png"
import camera from "../../../../images/camera.png"
import { Container, Navbar, Card, Button, Col, Form, Row } from 'react-bootstrap';
import "./NewPost.css"
import { useNavigate } from "react-router-dom";
import DataPage from "../../../dataPage/DataPage";

export default function NewPost() {

    const [showPage, setShowPage] = useState(false)
    const [formData, setFormData] = useState({
        image: null,
        author: "",
        location: "",
        description: ""
    })
    const userData= []

    
    const navigate = useNavigate()
    useEffect(() => {
        fetch("./data.json").then((res) => {
            return res.json()
        }).then((data) => userData=data.users).catch((err) => { console.log(err) })
    }, [])

    const handleChange = (e) => {
        setFormData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.value
        }))
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            image: file
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        userData.push(formData)
        setShowPage(true)
        navigate("/post")
    }
    console.log("new posts Data",userData,formData)
    return <>

        {showPage ? <DataPage uData={userData} /> : <> <Navbar>
            <Container>
                <Navbar.Brand href="#home"><span><img src={icon} alt="Logo-img" /></span>
                    <span>Insta Clone</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <img src={camera}  alt="Camera-icon" />
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className="home-container">
            <Card className="home-contant" >
                <Card.Body className="landing-contant" >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control name="Image" onChange={handleFileChange} type="file" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control name="author" type="text" value={formData.author} onChange={handleChange} placeholder="Author" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Location" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Post
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div> </>}
    </>

}