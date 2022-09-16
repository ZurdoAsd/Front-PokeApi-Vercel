import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import notFound from "./404.png"


export default function Card({ id, name, sprite, types }) {
  return (
      <ul className={s.Card}>
        <div className={s.Name}>
          <h2>{name}</h2>
          <h4>TYPE: {types?.map((e) => e.toUpperCase() + " ")} </h4>
        </div>
        <Link to={`/home/${id}`}>
        <img  loading="lazy" src={sprite.length? sprite : notFound} alt="img" className={s.Img}/>
        </Link>
      </ul>
  );
}
