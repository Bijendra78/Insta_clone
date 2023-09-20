import React from "react";
import { Link } from "react-router-dom";
import Home from "../../images/home.png"
import { Button, Card } from 'react-bootstrap';
import "./Landing.css"

export default function Landing() {
    return (
        <div className="home-container">
            <Card className="home-contant" >
                <Card.Img className="landing-img" variant="top" src={Home} alt="landing-image" style={{ width: '260px' }} />
                <Card.Body className="landing-contant" >
                    <Card.Title>10x Team 04</Card.Title>
                    <Link to={"new"}>
                        
                        <Button variant="primary">Enter</Button>
                        </Link>
                </Card.Body>
            </Card>
        </div>

    )
}