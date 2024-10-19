import { Place } from "../types/types";
import Route from "./Route";

type InfoWindowContentProps = {
  place: Place;
};

export default function InfoWindowContent({ place }: InfoWindowContentProps) {
  return (
    <div className="info-window">
      <h2 className="info-window__headline">{place.properties.NAME}</h2>
      <img className="info-window__image" src={place.properties.IMAGEURL} />
      <div className="info-window__description">
        {place.properties.DESCRIPTION}
      </div>
      <Route place={place} className="info-window__route" />
    </div>
  );
}
