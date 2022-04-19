import React, { useEffect } from "react";
import useDrivePicker from 'react-google-drive-picker'
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

//Image URL: https://drive.google.com/uc?id=<file.id>

function PhotoList(props) {
    //Google drive API
    const [openPicker, data, authResponse] = useDrivePicker();  
    // const customViewsArray = [new google.picker.DocsView()]; // custom view
    const handleOpenPicker = () => {
        openPicker({
        clientId: "772696188730-p05amocg6bvnn2v2ur4co7k1mq2ujmte.apps.googleusercontent.com",
        developerKey: "AIzaSyCr3-c6RzgP4mu8YbGaOcbjmNRLUC0RXvY",
        // viewId: "DOCS_IMAGES",
        viewMimeTypes: "application/vnd.google-apps.folder,image/bmp,image/gif,image/jpeg,image/tiff,image/png",
        customScopes: "https://www.googleapis.com/auth/drive.metadata.readonly",
        token: props.user.accessToken, // pass oauth access token in case you already have one
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        setIncludeFolders: true,
        setSelectFolderEnabled: true,
        // customViews: customViewsArray, // custom view
        })
    }

    useEffect(() => {
        // do anything with the selected/uploaded files
        if(data){
        data.docs.map(i => console.log(i))
        }
    }, [data])


    //Add and remove functions
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
                                            <Button className="m-1" onClick={handleOpenPicker}>Import from Google</Button>
                                            <Button className="m-1" onClick = {addAllPhoto}>Add All</Button>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <Row xs={1} md={3} className="g-4">
                                        {props.photoBank.map((photo,i) => (
                                            <Col key={i}>
                                            <Card >
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
                                        {props.photoMap.map((photo,i) => (
                                            <Col key={i}>
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