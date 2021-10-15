import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
import "./PlaceItem.css"
const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button className = "btn btn-outline-primary">Show on map</button>
          <Link to = {`/places/${props.id}`}><button className = "btn btn-warning">Edit</button></Link>
          <button className = "btn btn-danger">Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
