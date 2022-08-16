import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";


export default function Card({ id, name, sprite, types }) {
  return (
<Link to={`/home/${id}`}>
      <ul className={s.Card}>
        <div className={s.Name}>
          <h2>{name}</h2>
          <h4>TYPE: {types?.map((e) => e.toUpperCase() + " ")} </h4>
        </div>
        <img src={sprite} alt="img" className={s.Img}/>
        
      </ul>
</Link>
  );
}
