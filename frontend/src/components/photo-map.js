import React, {useState} from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

function PhotoMap() {

    const containerStyle = {
      width: "100%",
      height: "75vh",
      marginTop: "10px"
    };
    
    const center = {
      lat: 1.3521,
      lng: 103.8198,
    };
  
    ///sample photo data (start)/// ←This should be replaced by the photos from Google Drive
  
    // const imageChangi = {
    //   url: "https://farm7.staticflickr.com/43/79644334_a7a35adcbe_o.jpg",
    //     };
    
    // const imageSultanMosque = {
    //   url: "https://c2.staticflickr.com/6/5554/14275014799_bdfc52dd05_z.jpg",
    //     };
    
    const positionChangi = {
      lat: 1.3673108168171946,
      lng: 103.99141038508547
    };
    
    const positionSultanMosque = {
      lat: 1.3030695024923034,
      lng: 103.85869733119105
    };
  
    //sample photo data(end)//
  
    return (
        <LoadScript googleMapsApiKey="AIzaSyBdQqLvRqdR2Z55AVlrg9ZTeGRGm5c-36w">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}>
          <Marker /*icon={imageChangi}*/ position={positionChangi} />
          <Marker /*icon={imageSultanMosque}*/ position={positionSultanMosque} />
        </GoogleMap>
      </LoadScript>
  
    );
  };
  

export default PhotoMap;