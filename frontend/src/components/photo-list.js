import React from "react";
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

//Image URL: https://drive.google.com/uc?id=<file.id>

function PhotoList() {
    const photos = 
    ["1LVBeaxMrzycKr97Tb9vjK6VdeHo8ImkH",
    "1Rg1T538VrumwDQEWmynsoDaI-fLWkH2M",
    "1debxfqk1gRax-vj50nUaehJUd0vn8s7q",
    "1miutl58Fy5Uqaf8rwvnluIQqLsDh4s_v",
    "1blhTtDj5ZJIspb3cGWkuaQHbFbR_D3Kx",
    "1blhTtDj5ZJIspb3cGWkuaQHbFbR_D3Kx",
    "1blhTtDj5ZJIspb3cGWkuaQHbFbR_D3Kx"];
    return (
        <div className="App">
            <Row xs={1} md={2} className="g-4">
                <Col id = "Photo Bank Column">
                    <Card>
                        <Card.Header as="h5" className="d-flex align-items-center">
                            Photo Bank
                            <Button className="ml-auto">Add All</Button>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row xs={1} md={3} className="g-4">
                                {photos.map((photo) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={"https://drive.google.com/uc?id="+photo} loading="lazy"/> 
                                        <Card.Body>
                                        <Card.Subtitle>Image Name</Card.Subtitle>
                                        <Card.Text>
                                            {photo}
                                        </Card.Text>
                                        <Button>Add</Button>
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
                        <Card.Header>
                            Selected Photos
                            <Button className="float-end">Remove All</Button>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row xs={1} md={3} className="g-4">
                                {photos.map((photo) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={"https://drive.google.com/uc?id="+photo} loading="lazy"/>
                                        <Card.Body>
                                        <Card.Subtitle>Image Name</Card.Subtitle>
                                        <Card.Text>
                                            {photo}
                                        </Card.Text>
                                        <Button>Add</Button>
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
    )
}

export default PhotoList;