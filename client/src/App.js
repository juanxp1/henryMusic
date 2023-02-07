import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import New from "./Componentes/NewSong/New";

function App() {
  return (

    <>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/new" component={New} />

      </BrowserRouter>
    </>

  );
}

export default App;
