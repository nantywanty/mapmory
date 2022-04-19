import React from "react";
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

//Image URL: https://drive.google.com/uc?id=<file.id>

function PhotoList(props) {

    const logout = () => {
        console.log("Logged out");
        props.setUser(null);
        localStorage.setItem('mapmoryUser', null)
    }

    const addAllPhoto = () => {
        const newPhotoMap = props.photoBank.concat(props.photoMap);
        props.setPhotoMap(newPhotoMap);
        props.setPhotoBank([]);
    }

    const removeAllPhoto = () => {
        const newPhotoBank = props.photoBank.concat(props.photoMap);
        props.setPhotoBank(newPhotoBank);
        props.setPhotoMap([]);
    }

    const addPhoto = photo => {      
        const newPhotoMap = props.photoMap.concat(photo);
        const newPhotoBank = props.photoBank.filter(e => e !== photo);
        props.setPhotoMap(newPhotoMap);
        props.setPhotoBank(newPhotoBank);
    }

    const removePhoto = photo => {     
        const newPhotoBank = props.photoBank.concat(photo);
        const newPhotoMap = props.photoMap.filter(e => e !== photo);
        props.setPhotoMap(newPhotoMap);
        props.setPhotoBank(newPhotoBank);
    }

    return (
        <div>
            {props.user ? (
                <div id="Logged in">
                    <Row xs={1} md={2} className="g-4">
                        <Col id = "Photo Bank Column">
                            <Card>
                                <Card.Header as="h5">
                                    <Row className="d-flex align-items-center">
                                        <Col>Photo Bank</Col>
                                        <Col className="d-flex justify-content-end">
                                            <Button className="m-1">Update from Drive</Button>
                                            <Button className="m-1" onClick = {addAllPhoto}>Add All</Button>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <Row xs={1} md={3} className="g-4">
                                        {props.photoBank.map((photo) => (
                                            <Col>
                                            <Card>
                                                <Card.Img variant="top" src={"https://drive.google.com/uc?id="+photo} loading="lazy"/> 
                                                <Card.Body>
                                                <Card.Subtitle>Image Name</Card.Subtitle>
                                                <Card.Text>
                                                    {photo}
                                                </Card.Text>
                                                <Button onClick={() => addPhoto(photo)}>Add</Button>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col id = "Selected Photos Column">
                            <Card>
                                <Card.Header as="h5">
                                    <Row className="d-flex align-items-center">
                                        <Col>Selected Photos</Col>
                                        <Col className="d-flex justify-content-end">
                                            <Button variant="danger" className="m-1" onClick = {removeAllPhoto}>Remove All</Button>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <Row xs={1} md={3} className="g-4">
                                        {props.photoMap.map((photo) => (
                                            <Col>
                                            <Card>
                                                <Card.Img variant="top" className="" src={"https://drive.google.com/uc?id="+photo} loading="lazy"/>
                                                <Card.Body>
                                                <Card.Subtitle>Image Name</Card.Subtitle>
                                                <Card.Text>
                                                    {photo}
                                                </Card.Text>
                                                <Button variant="danger" onClick={() => removePhoto(photo)}>Remove</Button>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            ) : (
                <div id="guest">
                    Please log in
                </div>
            )}
        </div>
    )
}

export default PhotoList;