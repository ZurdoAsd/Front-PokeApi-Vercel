import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sorts from "../../FILTER-SORTS-VALIDATE/Sorts";
import { getAllPokemons} from "../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import s from"./homes.module.css";
import lupa from "../SearchBar/search.png";
import pokemon from "./Pokemon_logo.svg";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [/*order*/, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, /*setpokemonsPerPage*/] = useState(12);
  const indeOfLast = currentPage * pokemonsPerPage;
  const indexfirst = indeOfLast - pokemonsPerPage;
  const currentpokemons = allPokemons.slice(indexfirst, indeOfLast);
  const [showsearch,setShowsearch]= useState(false);
  const resultados= useSelector((state) => state.resultados);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
 
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
     setCurrentPage(1);
    setShowsearch(false);
  };

  console.log(allPokemons)
  return (
    <div className={s.container}>
       <div className={s.navbar}>
       <img className={s.logo} src={pokemon} alt="pokemon" />
       <div className={s.items}>
        <button className={s.recargar} onClick={handleClick}>RELOAD PAGE</button>
       <Link to="/create"><button className={s.crear}>  CREATE POKEMON </button></Link>
        <Sorts setOrder={setOrder} setCurrentPage={setCurrentPage} />
        </div>
        <button type="button" className={s.lupita}  onClick={()=>setShowsearch(!showsearch)}><img src={lupa} alt="foto"/></button>
        </div>
   
        {showsearch?<div><SearchBar setCurrentPage={setCurrentPage} /></div>:null}
    
        {currentpokemons.length>=1 
        ?<div> <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage}
        pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginado={paginado}/></div>:null}


        {resultados? <div className={s.currentpoke}> Pokemon found:  {allPokemons.length} 
        </div> :  null}
          

        {currentpokemons.length>=1 
        ? (currentpokemons.map((p) => {
            return (
           <div className={s.cards} key={p.id}> 
           <Card name={p.name.toUpperCase()}  sprite={p.sprite}  types={p.types} id={p.id}/> </div> ); })
         )  
        : (       
          <img 
            src= "https://i.gifer.com/origin/a8/a8cce7e5fb8f774dc79a06e3f727a070_w200.webp"
            alt=""
            justify-content="center"  align-items="center" height="100%" width="80%"/>  
           )
            }
    </div>
  );
}

