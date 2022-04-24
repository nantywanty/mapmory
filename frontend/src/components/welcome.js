import React from "react";
import { Carousel, Card } from 'react-bootstrap'

function Welcome() {
    return (
        <div className="App">
            <Card className = "p-3">
                <Card.Body className="h3">Welcome to MAPMORY</Card.Body>
                <Card.Body className="">Follow these three simple steps to relive your favourite adventures</Card.Body>
                <Card.Body className="h5">Step 1. Login with your Google account.</Card.Body>
                <Card.Body className="pt-0"><img src = "./welcome_step1.png" height = "350px"/></Card.Body>
                <Card.Body className="h5">Step 2. Click on the Photo List page and import your photos from Google Drive.</Card.Body>
                <Card.Body className="pt-0"><img src = "./welcome_step2.png" height = "350px"/></Card.Body>
                <Card.Body className="h5">Step 3. Click on the Photo Map page and start exploring!</Card.Body>
                <Card.Body className="pt-0"><img src = "./welcome_step3.png" height = "350px"/></Card.Body>
            </Card>
        </div>
    )
}

export default Welcome;