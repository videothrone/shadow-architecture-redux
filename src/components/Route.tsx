import { Place } from "../types/types";

type RouteProps = {
  place: Place;
  className?: string;
};

export default function Route({ place, className }: RouteProps) {
  return (
    <div className={`route ${className}`}>
      <div className="route__address">{place.properties.ADDRESS}</div>
      <div className="route__link-container">
        <a
          href={place.properties.DIRECTION}
          target="_blank"
          rel="noreferrer noopener"
          className="route__link"
        >
          <img
            src="/img/icon-brown.png"
            alt="Click for maps route"
            className="icon"
          />
          <img
            src="/img/icon-black.png"
            alt="Click for maps route"
            className="icon icon-top"
          />
        </a>
      </div>
    </div>
  );
}
