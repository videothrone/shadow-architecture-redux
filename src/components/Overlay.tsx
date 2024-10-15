import { useState } from "react";
import { Place } from "../types/types";

type Props = {
  selectedPlace: Place;
  setOverlayIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  overlayIsVisible: boolean;
};
export default function Overlay({
  selectedPlace,
  setOverlayIsVisible,
  overlayIsVisible,
}: Props) {
  const [extendedImage, setExtendedImage] = useState<string | null>(null);

  return (
    <>
      {overlayIsVisible && (
        <div id="marker-overlay" className="disable-scrollbars">
          <div id="marker-overlay-content-container">
            <div id="x" onClick={() => setOverlayIsVisible(false)}>
              X
            </div>
            <h2>{selectedPlace.properties.NAME}</h2>
            <div
              onClick={
                extendedImage == null
                  ? () => setExtendedImage("extended")
                  : () => setExtendedImage(null)
              }
            >
              <img
                src={selectedPlace.properties.IMAGEURL}
                className={extendedImage ?? ""}
              />
            </div>
            <div id="overlay-address">
              {selectedPlace.properties.ADDRESS} |{" "}
              <div className="route-marker" id="overlay-icon">
                <a
                  href={selectedPlace.properties.DIRECTION}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/img/icon-black.png" alt="Click for maps route" />
                  <img
                    src="/img/icon-white.png"
                    className="overlay-icon icon-top"
                  />
                </a>
              </div>
            </div>
            <div id="full-description">
              {selectedPlace.properties.FULL_DESCRIPTION}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
