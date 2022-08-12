import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchpoke } from "../../redux/actions";
import s from "./SearchBar.module.css";



export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
      e.preventDefault();
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!name) {
        return alert("Insert a search");
      } else {
      dispatch(searchpoke(name));
      setName('')
      setCurrentPage(1) ; 
      }}

   
  return (
    <div className={s.containerSearchbar}>
      <form onSubmit={handleSubmit} className={s.formSearchbar}> 
      <input
        className={s.input}
        type="text"
        name='search'
        id='Search'
        placeholder="Search..."
        value={name}
        onChange={handleInputChange}/>
      <button className={s.butonS}>Search</button>
       </form>
    </div>
  );
}
