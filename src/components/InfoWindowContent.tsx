import { Place } from "../types/types";
import Route from "./Route";

type InfoWindowContentProps = {
  place: Place;
  onClick: () => void;
};

export default function InfoWindowContent({
  place,
  onClick,
}: InfoWindowContentProps) {
  return (
    <div className="info-window">
      <h2 className="info-window__headline">{place.properties.NAME}</h2>
      <img className="info-window__image" src={place.properties.IMAGEURL} />
      <div className="info-window__description">
        {place.properties.DESCRIPTION}
      </div>
      <div className="info-window__explore" onClick={onClick}>
        Explore more...
      </div>
      <Route place={place} className="info-window__route" />
    </div>
  );
}
