import React, { useEffect } from "react";
import useDrivePicker from 'react-google-drive-picker'
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

//Image URL: https://drive.google.com/uc?id=<file.id>

function PhotoList(props) {

    //google-drive-picker

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
            const newPhotos = props.photos.concat(data.docs)
            props.setPhotos(newPhotos)
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
        const newPhotos = props.photos.filter(e => e !== photo);
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
                                <Col className="d-flex justify-content-end">
                                    <Button className="m-1" onClick={handleOpenPicker}>Import from Google Drive</Button>
                                    <Button variant="danger" className="m-1" onClick = {removeAllPhoto}>Remove All</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row xs={1} md={4} className="g-4">
                                {props.photos.map((photo,i) => (
                                    <Col key={i}>
                                    <Card>
                                        <Card.Img variant="top" className="" src={"https://drive.google.com/uc?id="+photo.id} loading="lazy"/>
                                        <Card.Body className="p-2">
                                        <Card.Subtitle className ="mb-2">{photo.filename}</Card.Subtitle>
                                        <Button variant="danger" onClick={() => removePhoto(photo)}>Remove</Button>
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
                    Please log in to use Mapmory
                </div>
            )}
        </div>
    )
}

export default PhotoList;