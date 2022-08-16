import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from "react";
import { OrderPoke,FilterPoke,getTypes} from '../redux/actions'
import s from "./Sorts.module.css"

 function Sorts({setCurrentPage,setOrder}){
    const dispatch = useDispatch(); 
    const allTypes = useSelector((state)=> state.types);
  
    useEffect(() => {
      dispatch(getTypes());
    }, [dispatch]);
    
      const orderPokemon= (e)=> {
        e.preventDefault();
        dispatch(OrderPoke(e.target.value));
        setCurrentPage(1);
        setOrder(`ordenado${e.target.value}`)
         e.target.value="default"
      }
      
      const filtroPokemon= (e) => {
        e.preventDefault();
        dispatch(FilterPoke(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenado${e.target.value}`)
        e.target.value="default"
      }

return(
<>
<select className={s.select}
  onChange={orderPokemon} defaultValue="default">
 <option value="default" disabled="disabled">ORDER POKEMON</option>
 <option  className={s.select2} value="nombre" disabled="disabled">BY NAME</option>
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>
  <option  className={s.select2} value="fuerza" disabled="disabled">STRENGTH</option>
  <option value="STR">STR++</option>
  <option value="STR-">STR--</option>
</select>

<select className={s.select} onChange={filtroPokemon} defaultValue="default">
<option value="default" disabled="disabled">FILTER</option>
<option className={s.select2} value="tttt" disabled="disabled">BY ORIGIN</option>
<option value="All">All</option>
<option value="Created">Created</option>
<option value="Existing">Existing</option>
<option value="tttt" className={s.select2} disabled="disabled">BY TYPE</option>
  {allTypes.map(e => {return( <option value={e.name} key={e.name}>{e.name}</option>)}) }  
</select>

</>
)
}

export default Sorts