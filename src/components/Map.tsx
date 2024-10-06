import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
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
  /* const [currentMap, setCurrentMap] = useState<google.maps.Map | null>(null); */

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    /* setCurrentMap(map); */
  }, []);

  /* const onUnmount = useCallback(function callback() {
    setCurrentMap(null);
  }, []); */

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      /* onUnmount={onUnmount} */
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <>
      <div>Couldn't load map...</div>
    </>
  );
}
