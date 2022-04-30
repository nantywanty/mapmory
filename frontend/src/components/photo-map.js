import React, {useState} from "react";
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
// import axios from "axios";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  Polyline,
  MarkerClusterer
} from "@react-google-maps/api";

/**Basic Map Setting */
const apikey = "AIzaSyBdQqLvRqdR2Z55AVlrg9ZTeGRGm5c-36w";

const containerStyle = {
  height: "80vh",
  width: "100%"
};

const center = {
  lat: 1.3521,
  lng: 103.8198
};

const scaledSize = {
  height: 75,
  width: 75
};
  
const clusterOptions = {
  enableRetinaIcons: true,
  maxZoom: 13,
  minimumClusterSize: 1
};
    
  
const PhotoMap = (props)=>{

  // const [path, setPath] = useState([]);
  const [showPoly, setshowPoly] = useState(false) 
  
  const photos = props.photos;
  console.log(photos)

  const onclickButton = () => {
    setshowPoly(!showPoly);
  };


  /**pending RoadAPI */
  // let origin = props.photos.map((originlocation) => {
  //   if(!(originlocation.location==null)){
  //     return `${originlocation.location.lat},${originlocation.location.lng}`}
  // });

  // origin = origin.filter(item =>!(item===undefined))
  // let original = origin.join("|")
  
  // axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${original}&interpolate=true&key=${apikey}`)
  // .then((res) => {
  //     const locations = res.data;
  //     const path = locations.snappedPoints.map((location) => {
  //       return {
  //         lat: location.location.latitude,
  //         lng: location.location.longitude
  //       };
  //     });
  //     // setPath(path)
  //   })

  let path = props.photos.map((originlocation) => {
    if(!(originlocation.location==null)){
      return originlocation.location}
  });

  path = path.filter(item =>!(item===undefined))

  console.log(path)


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

const onload = (infoWindow) => {
  console.log("infoWindow: ", infoWindow)};

    return (
      <div>
        <Card>
            <Card.Header as="h5">
                <Row className="d-flex align-items-center">
                    <Col>Your Memory</Col>
                    <Col className=" md-auto d-flex justify-content-end">
                        <Button variant="success" className="m-1" onClick = {onclickButton}>
                            <Row xs="auto">
                                <Col className="m-0 px-1.5">Show Footprint</Col>
                            </Row>
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="p-4">
                <Row xs={1} md={5} className="g-4">
                  <LoadScript googleMapsApiKey={apikey}>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={11}>
                      {showPoly || <MarkerClusterer options={clusterOptions}>
                        {(clusterer) =>
                          props.photos.map((photo) => (
                            <>
                              <Marker
                                position={photo.location}
                                clusterer={clusterer}
                              />
                              <InfoWindow onload={onload} position={photo.location}>
                                <div style={{backgroundColor: 'black'}}>
                                  <img src={"https://drive.google.com/uc?id=" + photo.id} style={scaledSize} />
                                  {/* <p>{photo.date}</p> */}
                                </div>
                              </InfoWindow>
                            </>
                          ))
                        }
                      </MarkerClusterer>}
                      {showPoly && <Polyline path={path} options={polylineOptions} />} 
                    </GoogleMap>
                  </LoadScript>   
                </Row>
            </Card.Body>
        </Card>

      </div>
    //   <>
    //   <button onClick={onclickButton}>ShowPolyline</button>
    //   <LoadScript googleMapsApiKey={apikey}>
    //     <GoogleMap
    //       mapContainerStyle={containerStyle}
    //       center={center}
    //       zoom={11}>
    //         <>
    //       {showPoly || <MarkerClusterer options={clusterOptions}>{
    //         (clusterer) =>
    //           props.photos.map((photo, i) => (
    //           <Marker
    //             key={i}
    //             icon={{ url: "https://drive.google.com/uc?id=" + photo.id, scaledSize: scaledSize }}
    //             position={photo.location}
    //             clusterer={clusterer}
    //             />
    //           ))
    //         }
    //       </MarkerClusterer>}
    //       {showPoly && <Polyline path={path} options={polylineOptions} />}            
    //         </>
    //     </GoogleMap>
    //   </LoadScript>
    //   </>
    // );
    )};



export default PhotoMap