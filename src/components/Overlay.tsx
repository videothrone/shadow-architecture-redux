import { useEffect, useState } from "react";
import { Place } from "../types/types";
import Route from "./Route";

type OverlayProps = {
  selectedPlace: Place;
  setOverlayIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  overlayIsVisible: boolean;
};
export default function Overlay({
  selectedPlace,
  setOverlayIsVisible,
  overlayIsVisible,
}: OverlayProps) {
  const [extendedImage, setExtendedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOverlayIsVisible(false);
      }
    };

    if (overlayIsVisible) {
      window.addEventListener("keydown", handleKeydown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [overlayIsVisible, setOverlayIsVisible]);

  return (
    <>
      {overlayIsVisible && (
        <div className="overlay disable-scrollbars">
          <div className="overlay__content">
            <div
              className="overlay__content-close-button"
              onClick={() => setOverlayIsVisible(false)}
            >
              X
            </div>
            <h2 className="overlay__headline">
              {selectedPlace.properties.NAME}
            </h2>
            <div
              onClick={
                extendedImage == null
                  ? () => setExtendedImage("overlay__image--extended")
                  : () => setExtendedImage(null)
              }
            >
              <img
                src={selectedPlace.properties.IMAGEURL}
                className={`overlay__image ${extendedImage ?? ""}`}
              />
            </div>
            <Route place={selectedPlace} className="overlay__route" />
            <div className="overlay__content-description">
              {selectedPlace.properties.FULL_DESCRIPTION}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
