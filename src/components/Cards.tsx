import placesData from "../assets/data/markers.json";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="cards">
      {placesData.places.map((place, index) => (
        <Card key={index} place={place} index={index} />
      ))}
    </div>
  );
}
