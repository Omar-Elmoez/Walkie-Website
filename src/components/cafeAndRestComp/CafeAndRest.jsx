/* eslint-disable react/prop-types */
import CoffeCard from "../coffeCardComp/Coffe";
import ComingSoonCard from "../comingSoonComp/ComingSoonCard";
import { CoffeCardTitles, CommingSoonPlaces } from "../../data";
import "./CafeAndRest.css";

export default function CafeAndRest(props) {
  return (
    <div className="cafeAndRest" id="cafes">
      <div className="container">
        <h3 className="placesDiv__heading">{props.heading}</h3>
        {props.group === "1" && (
          <div className="cards">
            {CoffeCardTitles.map((title, index) => (
              <CoffeCard key={index} title={title} />
            ))}
          </div>
        )}
        {props.group === "2" && (
          <div className="cards">
            {CommingSoonPlaces.map((place, index) => (
              <ComingSoonCard key={index} num={place} />
            ))}
          </div>
        )}
        <button className="cafeAndRest__btn">View All</button>
      </div>
    </div>
  );
}
