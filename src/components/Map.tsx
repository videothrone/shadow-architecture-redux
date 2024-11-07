import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useCallback, useState } from "react";
import markersData from "../assets/data/markers.json";
import mapStyles from "../assets/map-styles.js";
import { Place } from "../types/types.js";
import InfoWindowContent from "./InfoWindowContent";
import Overlay from "./Overlay";
import Loader from "./Loader";

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
  });

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);

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

  const handleMarkerClick = (place: Place) => {
    setSelectedPlace(place);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  const handleExploreClick = (place: Place) => {
    setSelectedPlace(place);
    setOverlayIsVisible(true);
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
              onClick={() => handleMarkerClick(place)}
            />
          ))}

        {selectedPlace && (
          <InfoWindowF
            position={{
              lat: selectedPlace.coordinates[0] || 0,
              lng: selectedPlace.coordinates[1] || 0,
            }}
            onCloseClick={handleInfoWindowClose}
          >
            <InfoWindowContent
              place={selectedPlace}
              onClick={() => handleExploreClick(selectedPlace)}
            />
          </InfoWindowF>
        )}

        {selectedPlace && setOverlayIsVisible && (
          <Overlay
            selectedPlace={selectedPlace}
            setOverlayIsVisible={setOverlayIsVisible}
            overlayIsVisible={overlayIsVisible}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <div className="map map--loading">
      <Loader />
    </div>
  );
}
