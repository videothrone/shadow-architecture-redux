import { Place } from "../types/types";

type Props = {
  place: Place;
};

export default function InfoWindowContent({ place }: Props) {
  return (
    <div className="info-window">
      <h2 className="info-window__headline">{place.properties.NAME}</h2>
      <img className="info-window__image" src={place.properties.IMAGEURL} />
      <div>{place.properties.DESCRIPTION}</div>
      <div className="info-window__address">
        {place.properties.ADDRESS}
        <div className="route" id="overlay-icon-marker">
          <a
            href={place.properties.DIRECTION}
            target="_blank"
            rel="noreferrer noopener"
            className="info-window__link"
          >
            <img src="/img/icon-brown.png" alt="Click for maps route" />
            <img src="/img/icon-black.png" className="overlay-icon icon-top" />
          </a>
        </div>
      </div>
    </div>
  );
}
