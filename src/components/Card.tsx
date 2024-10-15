import { Place } from "../types/types";

type Props = {
  place: Place;
  index: number;
};

export default function Card({ place, index }: Props) {
  return (
    <div key={index} className="card card__animation">
      <h2 className="card__headline">{place.properties.SHORT_NAME}</h2>
      <img src={place.properties.IMAGEURL} className="card__image" />
      <div className="card__description">{place.properties.DESCRIPTION}</div>
    </div>
  );
}
