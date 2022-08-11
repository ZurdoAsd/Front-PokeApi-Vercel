import React from "react";
import s from"./Paginado.module.css";

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pagNum = [];

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pagNum.push(i);
  }

  return (
    <>
      <div className={s.containerPaginado}>
        <ul>
          {pagNum &&
            pagNum.map((number) => (
              <button
                className={s.button}
                key={number}
                onClick={() => paginado(number)}>{number}</button>))}
        </ul>
      </div>
    </>
  );
}
