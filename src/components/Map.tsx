import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import markersData from "../assets/data/markers.json";

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
  width: "400px",
  height: "400px",
};

const center = {
  lat: 52.520008,
  lng: 13.404954,
};

console.log("markersData:", markersData);

export default function Map() {
  const googleMapsApiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
    libraries: ["places"],
  });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    /* setCurrentMap(map); */
  }, []);

  /* const onUnmount = useCallback(function callback() {
    setCurrentMap(null);
  }, []); */

  useEffect(() => {
    console.log("selectedPlace:", selectedPlace);
  }, [selectedPlace]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      /* onUnmount={onUnmount} */
    >
      {markersData.places.map((place: Place) => (
        <Marker
          key={place.properties.PLACE_ID}
          position={{
            lat: place.coordinates[0] || 0,
            lng: place.coordinates[1] || 0,
          }}
          onClick={() => setSelectedPlace(place)}
          icon={{
            url: "./img/marker-brown.png",
            scaledSize: new window.google.maps.Size(75, 75),
          }}
        />
      ))}

      {/*       {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.coordinates[0],
            lng: selectedPlace.coordinates[1],
          }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.properties.NAME}</h2>
            <p>{selectedPlace.properties.DESCRIPTION}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  ) : (
    <>
      <div>Couldn't load map...</div>
    </>
  );
}
