import React from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps';

const Map = (props) =>{
    const location = {
        lat:-33.461826,
        lng:-70.663894
    }

    return (
        <GoogleMap
        defaultZoom={13}
        defaultCenter={{lat: location.lat, lng: location.lng}}
        />
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
);