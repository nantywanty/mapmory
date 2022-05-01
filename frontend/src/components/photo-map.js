import React, {useState} from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Polyline,
  MarkerClusterer
} from "@react-google-maps/api";

const apikey = "AIzaSyBdQqLvRqdR2Z55AVlrg9ZTeGRGm5c-36w";

const containerStyle = {
  height: "80vh",
  width: "100%"
};

const center = {
  lat: 0,
  lng: 0
};

const clusterOptions = {
  enableRetinaIcons: true,
  maxZoom: 13,
  minimumClusterSize: 1
};
  
const PhotoMap = (props)=>{

  const [showPoly, setshowPoly] = useState(false)
  const [photoSize, setPhotoSize] = useState({height:50})
  
  let photos = props.photos;
  // console.log(photos)

  /**remove photos that don't have location data */
  photos = photos.filter(photo =>!(photo.location===null))

  /**sort photos by date */
  photos = photos.sort((a, b)=> {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
  // console.log(photos)

  const onclickButton = () => {
    setshowPoly(!showPoly);
  };

  /**generate a list of location for showing Polyline */
  const path = photos.map((photo) => photo.location);

  // console.log(path)


  const polylineOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 500000,
    paths:{path},
    zIndex: 1
  };

  function handleZoomChange() {
    setPhotoSize({height:10+2*this.zoom**2})
    // console.log("zoom level:"+this.zoom)
    // console.log(photoSize)
  };

  return (
    <div>
      <Card>
          <Card.Header as="h5">
              <Row className="d-flex align-items-center">
                  <Col>My Mapmory</Col>
                  <Col className=" md-auto d-flex justify-content-end">
                      <Button variant="secondary" className="m-1" onClick = {onclickButton}>
                          <Row xs="auto">
                              {showPoly || <Col className="m-0 px-1.5"><Icon.Signpost size={24} color="white"/></Col>}
                              {showPoly ||   <Col className="m-0 px-1.5">Show Footprint</Col>}
                              {showPoly && <Col className="m-0 px-1.5"><Icon.Images size={24} color="white"/></Col>}
                              {showPoly &&   <Col className="m-0 px-1.5">Show Photos</Col>}
                          </Row>
                      </Button>
                  </Col>
              </Row>
          </Card.Header>
          <Card.Body>
            <LoadScript googleMapsApiKey={apikey}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={2}
                onZoomChanged={handleZoomChange}
              >
                {showPoly || <MarkerClusterer options={clusterOptions}>
                  {(clusterer) =>
                    photos.map((photo,i) => (
                      <InfoWindow key={i} position={photo.location}>
                        <img src={"https://drive.google.com/uc?id=" + photo.id} style={photoSize} />
                      </InfoWindow>
                    ))
                  }
                </MarkerClusterer>}
                {showPoly && <Polyline path={path} options={polylineOptions} />} 
              </GoogleMap>
            </LoadScript>   
          </Card.Body>
      </Card>
    </div>
  )
};



export default PhotoMap
