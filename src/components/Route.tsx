import { Place } from "../types/types";
import { LiaMap } from "react-icons/lia";

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
          <LiaMap className="icon route__link-icon" />
        </a>
      </div>
    </div>
  );
}
