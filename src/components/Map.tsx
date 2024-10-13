import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useCallback } from "react";
import markersData from "../assets/data/markers.json";
import mapStyles from "../assets/map-styles.js";

type PlaceProperties = {
  PLACE_ID: number;
  NAME: string;
  SHORT_NAME: string;
  DESCRIPTION: string;
  ADDRESS: string;
  FULL_DESCRIPTION: string;
  IMAGEURL: string;
  DIRECTION: string;
};

type Place = {
  properties: PlaceProperties;
  coordinates: number[];
};

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 52.520008,
  lng: 13.404954,
};

export default function Map() {
  const googleMapsApiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
    libraries: ["places"],
  });

  /*   const onLoad = useCallback(function callback(map: google.maps.Map) {
    console.log("Map loaded:", map);
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []); */

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    markersData.places.forEach((place) => {
      bounds.extend({ lat: place.coordinates[0], lng: place.coordinates[1] });
    });
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback(function callback() {
    console.log("Map unmounted");
  }, []);

  const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return isLoaded ? (
    <div className="map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        options={mapOptions}
        onUnmount={onUnmount}
      >
        {markersData.places &&
          markersData.places.map((place: Place) => (
            <MarkerF
              key={place.properties.PLACE_ID}
              position={{
                lat: place.coordinates[0] || 0,
                lng: place.coordinates[1] || 0,
              }}
              icon={{
                url: "/img/marker-brown.png",
                scaledSize: new window.google.maps.Size(75, 75),
              }}
            />
          ))}
      </GoogleMap>
    </div>
  ) : (
    <>
      <div>Couldn't load map...</div>
    </>
  );
}
