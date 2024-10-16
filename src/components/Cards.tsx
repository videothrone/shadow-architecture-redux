import { useState } from "react";
import placesData from "../assets/data/markers.json";
import Card from "./Card";
import Overlay from "./Overlay";
import { Place } from "../types/types";

export default function Cards() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);

  const handleCardClick = (place: Place) => {
    setSelectedPlace(place);
    setOverlayIsVisible(true);
  };

  return (
    <>
      <div className="cards">
        {placesData.places.map((place, index) => (
          <Card
            key={index}
            place={place}
            index={index}
            onClick={() => handleCardClick(place)}
          />
        ))}
      </div>
      {selectedPlace && (
        <Overlay
          selectedPlace={selectedPlace}
          setOverlayIsVisible={setOverlayIsVisible}
          overlayIsVisible={overlayIsVisible}
        />
      )}
    </>
  );
}
