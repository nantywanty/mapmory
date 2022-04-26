import React, {useState} from "react";
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
  height: 120,
  width: 120
};
  
    ///sample photo data (start)/// ←This should be replaced by the photos from Google Drive
  
const clusterOptions = {
  enableRetinaIcons: true,
  maxZoom: 13,
  minimumClusterSize: 1
};
    
    const imageInfo = [
      {
        name: "Changi",
        url: "https://drive.google.com/uc?id=1LVBeaxMrzycKr97Tb9vjK6VdeHo8ImkH",
        location: { lat: 1.3673108168171946, lng: 103.99141038508547 }
      },
      {
        name: "SultanMosque",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3030695024923034, lng: 103.85869733119105 }
      },
      {
        name: "c",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3123034, lng: 103.858733119105 }
      },
      {
        name: "d",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3230695024923034, lng: 104.0033119105 }
      },
      {
        name: "e",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.330695024923034, lng: 103.8733119105 }
      },
      {
        name: "f",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.30695024923034, lng: 103.8569733119105 }
      },
      {
        name: "g",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3695024923034, lng: 103.586119105 }
      },
      {
        name: "h",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3030695024923034, lng: 103.569733119105 }
      },
      {
        name: "i",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3095024923034, lng: 103.858733119105 }
      },
      {
        name: "j",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.395024923034, lng: 103.8586733119105 }
      },
      {
        name: "k",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.305024923034, lng: 103.85869733119105 }
      },
      {
        name: "l",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3030695024923034, lng: 103.9733119105 }
      },
      {
        name: "m",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3430695024923034, lng: 103.869733119105 }
      },
      {
        name: "n",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3730695024923034, lng: 103.8519105 }
      },
      {
        name: "o",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.430695024923034, lng: 103.9733119105 }
      },
      {
        name: "p",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3830695024923034, lng: 103.869733119105 }
      },
      {
        name: "q",
        url: "https://drive.google.com/uc?id=1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        location: { lat: 1.3930695024923034, lng: 103.733119105 }
      }
    ];
  
    //sample photo data(end)//
  
  const PhotoMap = (props) => {
    return (
        <LoadScript googleMapsApiKey={apikey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}>
          <MarkerClusterer options={clusterOptions}>{
            (clusterer) =>
              props.photos.map((photo, i) => (
              <Marker
                key={i}
                icon={{ url: "https://drive.google.com/uc?id=" + photo.id, scaledSize: scaledSize }}
                position={photo.location}
                clusterer={clusterer}
                />
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
  
    );
  };
  

export default PhotoMap;