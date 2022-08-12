import React from "react";
import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, crearPoke } from "../../redux/actions";
import validate from "../../FILTER-SORTS-VALIDATE/Validate";
import { Link } from "react-router-dom";
import s from "./Form.module.css";

export default function Create() {
  const dispatch = useDispatch();
  const AlTypes = useSelector((state) => state.types);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    types: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    sprite: "",
  });

  useEffect(() => {
    dispatch(getTypes()); 
  }, [dispatch]);

  const handleOfChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelectTypes = (e) => {
    setInput({
      ...input,
      types: [...new Set([...input.types, e.target.value])],
    });
    e.target.value="default"
  };

  const handleDeleteTypes = (e) => {
    const newArr = input.types.filter((type) => type !== e.target.value);
    setInput({
      ...input,
      types: newArr,
    });
  };

  const handleReset = () => {

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      sprite: "",
      types: [],
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      input.name &&
      input.hp &&
      input.attack &&
      input.sprite &&
      input.defense &&
      input.speed &&
      input.height &&
      input.weight &&
      input.sprite.length<25?input.sprite="https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png":input.sprite
       &&
      input.types.length&&
      !Object.keys(error).length
    )
{     dispatch(crearPoke(input));
    alert("Pokemon Created!");
  
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      sprite: "",
      types: [],
    }); 
  } else{ alert(`Needs completing... ${Object.keys(error)}`) }
 
  };
 
  return (
    <div className={s.containerCreate}>
      <div className={s.row}>
     
        <form className={s.form} onSubmit={handleSubmit} onReset={handleReset}>
          <div>
             <div className={s.title}>  Create New Pokemon</div>
            <div className={s.forgrup}>
              <input
                className={s.forinput}
                placeholder=" "
                autoComplete="off"
                type="text"
                value={input.name}
                name="name"
                onChange={handleOfChange}
              />
               <label className={s.forlabel}>Name: </label>
            </div>
            {error.name && <p className={s.error}>{error.name}</p>}
          </div>

          <div>
            <div className={s.forgrup}>
              <input
                 className={s.forinput}
                 placeholder=" "
                autoComplete="off"
                type="number"
                step="0.10"
                min="0.1"
                max="15"
                value={input.height}
                name="height"
                onChange={handleOfChange}
              />
               <label className={s.forlabel}>Height: </label>
            </div>
            {error.height && <p className={s.error}>{error.height}</p>}
          </div>

          <div>
            <div className={s.forgrup}>
  
              <input
                  className={s.forinput}
                  placeholder=" " 
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.weight}
                name="weight"
                onChange={handleOfChange}
              />
            <label className={s.forlabel}>Weight: </label>
            </div>
            {error.weight && <p className={s.error}>{error.weight}</p>}
          </div>

          <div>
            <div className={s.forgrup}>
              <input
               className={s.forinput}
               placeholder=" " 
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.hp}
                name="hp"
                onChange={handleOfChange}
              />
                <label className={s.forlabel}>Hp: </label> 
            </div>
            {error.hp && <p className={s.error}>{error.hp}</p>}
          </div>
          <div>
            <div className={s.forgrup}>
              <input
                  className={s.forinput}
                  placeholder=" " 
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.speed}
                name="speed"
                onChange={handleOfChange}
              />
              
              <label className={s.forlabel}>Speed: </label>
            </div>
            {error.speed && <p className={s.error}>{error.speed}</p>}
          </div>

          <div>
            <div className={s.forgrup}>
              <input
               className={s.forinput}
               placeholder=" " 
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.attack}
                name="attack"
                onChange={handleOfChange}
              />
               <label className={s.forlabel}>Strength: </label>
            </div>
            {error.attack && <p className={s.error}>{error.attack}</p>}
          </div>

          <div>
            <div className={s.forgrup}>
   
              <input
                 className={s.forinput}
                 placeholder=" " 
                autoComplete="off"
                type="number"
                step="0.10"
                value={input.defense}
                name="defense"
                onChange={handleOfChange}
              />
             <label className={s.forlabel}>Defense: </label>  
            </div>
            {error.defense && <p className={s.error}>{error.defense}</p>}
          </div>

          <div className={s.forgrup}>    
            <input
               className={s.forinput}
               placeholder=" " 
              autoComplete="off"
              type="text"
              value={input.sprite}
              name="sprite"
              onChange={handleOfChange}
            />
         <label className={s.forlabel}>Image: </label>    
          </div>

          <div>
            <div className={s.section}>
              <label className={s.titleName}>Types</label>
              {input.types.length<2?
              <select className={s.input} onChange={handleSelectTypes} defaultValue="default" >
                <option value="default" hidden> Select types</option>
                {input.types.length<2?
                AlTypes && AlTypes.map((e) => ( <option key={e.id} value={e.mane}>{e.name}</option>))
                : null
                }
              </select>:null}
            </div>
            {error.types && <p className={s.error}>{error.types}</p>}
          </div>

          <div className={s.itemEliminar}>
            {input.types.map((e) => (
              <div>
                <button
                  type="button"
                  value={e}
                  className={s.deleteTypes}
                  onClick={handleDeleteTypes}
                >
                  {e.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
          <div className={s.botones}>
          <button className={s.boton1} type="submit" >Create Pokemon
          </button>
          <button className={s.boton2} type="reset"> Reset </button>
          </div>
            <Link to="/home">
          <button className={s.botcreate}>GO TO HOME</button>
        </Link>
        </form>

      
      </div>
    </div>
  );
}
