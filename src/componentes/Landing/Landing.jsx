import React from "react";
import { Link } from "react-router-dom";
import s from "./Landing.module.css";
import foto from "./pokeapi.svg"

const Landing = () => {
  return (
    <div className= {s.landingContainer}>
      <img src={foto}alt="pokeapi"></img>
      <Link to="/Home">
      
<div class={s.pokebola}>
<div class={s.detalle}></div>
</div>

      </Link>

    </div>


  );
};

export default Landing;