import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import New from "./Componentes/NewSong/New";
//audio
import Player1 from "./Componentes/Audio-Player/Player1"

function App() {
  return (

    <>

      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/audio" component={Player1} />


      </BrowserRouter>
    </>

  );
}

export default App;
