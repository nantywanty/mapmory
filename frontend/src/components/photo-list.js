import React, { useEffect } from "react";
import useDrivePicker from 'react-google-drive-picker'
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

//Image URL: https://drive.google.com/uc?id=<file.id>

function PhotoList(props) {

    //google-drive-picker

    const [openPicker, data, authResponse] = useDrivePicker();  
    const handleOpenPicker = () => {
        openPicker({
        clientId: "772696188730-p05amocg6bvnn2v2ur4co7k1mq2ujmte.apps.googleusercontent.com",
        developerKey: "AIzaSyCr3-c6RzgP4mu8YbGaOcbjmNRLUC0RXvY",
        viewMimeTypes: "application/vnd.google-apps.folder,image/bmp,image/gif,image/jpeg,image/tiff,image/png",
        customScopes: "https://www.googleapis.com/auth/drive.metadata.readonly",
        token: props.user.accessToken, // pass oauth access token
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        setIncludeFolders: true,
        setSelectFolderEnabled: true,
        })
    }
    useEffect(() => {
        if(data){
            // data.docs.map(i => console.log(i))
            const newPhotos = data.docs;
            const nonDupPhotos = newPhotos.filter(newPhoto => !props.photos.some(photo => photo.id == newPhoto.id))
            props.setPhotos(props.photos.concat(nonDupPhotos));
        }
    }, [data])

    // Example object returned:
        // description: ""
        // embedUrl: "https://drive.google.com/file/d/140Cs3QL-9N61jGr8VYpoyEVmqBr0BnhX/preview?usp=drive_web"
        // iconUrl: "https://drive-thirdparty.googleusercontent.com/16/type/image/jpeg"
        // id: "140Cs3QL-9N61jGr8VYpoyEVmqBr0BnhX"
        // isShared: true
        // lastEditedUtc: 1529061264988
        // mimeType: "image/jpeg"
        // name: "P1011824.jpg"
        // parentId: "1xUmvP6r8hmK4KTruzf5M0XgLrLM2Q8CC"
        // rotation: 0
        // rotationDegree: 0
        // serviceId: "docs"
        // sizeBytes: 14017425
        // type: "photo"
        // url: "https://drive.google.com/file/d/140Cs3QL-9N61jGr8VYpoyEVmqBr0BnhX/view?usp=drive_web"

        
    //Other functions

    const removeAllPhoto = () => {
        props.setPhotos([]);
    }

    const removePhoto = photo => {     
        const newPhotos = props.photos.filter(e => e.id !== photo.id);
        props.setPhotos(newPhotos);
    }
    
    //Component render

    return (
        <div>
            {props.user ? (
                <div id="Logged in">
                    <Card>
                        <Card.Header as="h5">
                            <Row className="d-flex align-items-center">
                                <Col>Selected Photos</Col>
                                <Col className=" md-auto d-flex justify-content-end">
                                    <Button className="m-1" variant="primary" onClick={handleOpenPicker}>
                                        <Row xs="auto">
                                            <Col className="m-0 px-1.5"><Icon.CloudArrowDown size={24} color="white"/></Col>
                                            <Col className="m-0 px-1.5">Import from Google Drive</Col>
                                        </Row>
                                    </Button>
                                    <Button variant="danger" className="m-1" onClick = {removeAllPhoto}>
                                    <Row xs="auto">
                                            <Col className="m-0 px-1.5"><Icon.XLg size={23} color="white"/></Col>
                                            <Col className="m-0 px-1.5">Remove All</Col>
                                        </Row>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row xs={1} md={6} className="g-4">
                                {props.photos.map((photo,i) => (
                                    <Col key={i}>
                                    <Card>
                                        <Card.Img variant="top" className="" src={"https://drive.google.com/uc?id="+photo.id} loading="lazy"/>
                                        <Card.Body className="p-2">
                                        <Card.Text className ="mb-0" style={{ fontSize: "14px" }}>
                                            <img src ="https://drive-thirdparty.googleusercontent.com/16/type/image/jpeg" />
                                            {" "+photo.name}
                                        </Card.Text>
                                        <Button className="p-0 float-end" variant="light" onClick={() => removePhoto(photo)}>
                                            <Icon.XSquareFill size={25} color="darkgrey"/>
                                        </Button>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            ) : (
                <div id="guest">
                    <Card><Card.Body className="p-4">Please log in with your Google account to start using Mapmory.</Card.Body></Card>
                </div>
            )}
        </div>
    )
}

export default PhotoList;