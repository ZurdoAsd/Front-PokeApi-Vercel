import React from "react";
import s from"./Paginado.module.css";

export default function Paginado({ pokemonsPerPage, allPokemons, paginado,currentPage,setCurrentPage }) {
  const pagNum = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pagNum.push(i);
  }
const maximo =Math.ceil(allPokemons / pokemonsPerPage)

  const nextPage = () => { setCurrentPage (parseInt(currentPage) + 1);};

  const previousPage = () => { setCurrentPage (parseInt(currentPage) - 1);};


  return (
      <div className={s.containerPaginado}>
        <ul>
    <button className={s.button} disabled={currentPage === 2 || currentPage < 2}
            onClick={() => paginado(1)}>&laquo;&laquo;</button>

    <button className={s.button} disabled={currentPage === 1 || currentPage < 1}
           onClick={previousPage}>&laquo;</button>

    <button className={s.button2}>{currentPage}</button> 

    <button className={s.button} 
     disabled={currentPage === Math.ceil (maximo) }
     onClick={nextPage}>&raquo;</button>
 
    <button   className={s.button}  
   
   disabled={currentPage === Math.ceil (maximo-1) || currentPage > Math.ceil (maximo-1)}  

    onClick={() => paginado(pagNum.length)}> 
            &raquo;&raquo;
            </button>   
        </ul>
      </div>
  );
}
