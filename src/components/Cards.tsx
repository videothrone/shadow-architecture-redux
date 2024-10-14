import placesData from "../assets/data/markers.json";

export default function Cards() {
  return (
    <div className="cards">
      {placesData.places.map((place, index) => (
        <div key={index} className="card animation">
          <h2 className="card__headline">{place.properties.SHORT_NAME}</h2>
          <img src={place.properties.IMAGEURL} className="card__image" />
          <div className="card__description">
            {place.properties.DESCRIPTION}
          </div>
        </div>
      ))}
    </div>
  );
}
