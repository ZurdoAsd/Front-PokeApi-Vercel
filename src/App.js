import { Route, Switch } from "react-router-dom";
import Home from "./componentes/Home/Home.jsx";
import Landing from "./componentes/Landing/Landing.jsx";
import Create from "./componentes/Create/Create.jsx";
import  Details  from "./componentes/Details/Details.jsx";
import s from "./App.module.css"

function App() {
  return (
    <div className={s.App}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Home/:id" component={Details} />
        <Route exact path="/create" component={Create} />
        <Route path="*" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
