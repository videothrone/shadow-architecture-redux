import { Place } from "../types/types";

type Props = {
  place: Place;
  index: number;
  onClick: () => void;
};

export default function Card({ place, index, onClick }: Props) {
  return (
    <div key={index} className="card card--animation" onClick={onClick}>
      <h2 className="card__headline">{place.properties.SHORT_NAME}</h2>
      <img
        src={place.properties.IMAGEURL}
        className="card__image"
        alt={`Picture of ${place.properties.NAME}`}
      />
      <div className="card__description">{place.properties.DESCRIPTION}</div>
    </div>
  );
}
