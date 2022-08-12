import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailPoke, clearDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import s from "./Details.module.css";

export default function Details() {
  const { id } = useParams();
 const poke = useSelector((state) => state.details);
 const [version,setversion]= useState(true)

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(DetailPoke(id));
    return () => dispatch(clearDetails());
  }, [dispatch, id]);

const controlversion= (e)=>{
  e.preventDefault();
  e.target.value==="Basic"?setversion(true):setversion(false);
  e.target.value="default"
}

if (poke.name) {

return (
<div className={s.containerDetail}> 

<div className={s.encabezado}>
<h1 className={s.titleD}>{poke.name.toUpperCase()} N°: {poke.id} </h1>
{poke.shiny?<select className={s.version} onChange={controlversion} defaultValue="default">
<option value="default" disabled>version</option>
<option value="Basic">Basic</option>
<option value="Shiny">Shiny</option>
</select>:
null
}
 </div>
 
<div className={s.containerDetails}>
<div className={s.center}> 
{version?(
<div className={s.miniimg1}><img src={poke.sprite} alt="img"  /><h5>Version: Basic</h5></div>)
:<div className={s.miniimg1}><img src={poke.shiny} alt="img"  /><h5>Version: Shiny</h5></div>
}

<div className={s.miniimg3}> 
<h2>Stats</h2>
<p>TYPE: {poke.types&&poke.types.map((e) => e.toUpperCase() + " ")}
</p>
<p>HP: {poke.hp} </p>
<p>ATTACK: {poke.attack} </p>
<p>DEFENSE: {poke.defense}</p>
<p>SPEED: {poke.speed} </p>
<p>HEIGHT: {poke.height} </p>
<p>WEIGHT: {poke.weight}</p></div>
</div>  
</div>

<div className={s.Footter}>
<button className={s.botFooter} ><Link to="/Home">HOME</Link> </button>
</div>
</div>

);
  }
return(  
  <div   className={s.Containerloading}>
  <img
  className={s.loading}
  src= "https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif"
  alt=""
/>
<img
  className={s.loading}
  src= "https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif"
  alt=""
/>
<img
  className={s.loading}
  src= "https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif"
  alt=""
/>
<img
  className={s.loading}
  src= "https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif"
  alt=""
/>
<img
  className={s.loading}
  src= "https://www.gratistodo.com/wp-content/uploads/2016/12/Pokemon-gifs-13.gif"
  alt=""
/>
</div>
 )

}
