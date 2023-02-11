import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import New from "./Componentes/NewSong/New";
import Detail from './Componentes/Detail/Detail'
import { useSelector } from 'react-redux'
import Homedos from './Componentes/Homedos/Homedos'
//audio


function App() {

  const { landing } = useSelector(state => state);

  return (

    <>
      {
        !landing && <Home />
      }

      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/new" component={New} />
        <Route path="/home" component={Homedos} />
        <Route path="/detail/:id" component={Detail} />
      </BrowserRouter>

    </>

  );


}







export default App;
