import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import New from "./Componentes/NewSong/New";
import Detail from './Componentes/Detail/Detail'
import { useSelector } from 'react-redux'
import Homedos from './Componentes/Homedos/Homedos'
import PlayList from "./Componentes/CreatePlayList/PlayList";
import video from './Fotos/publi.mp4';
//audio
//Publicidad
import Ads from './Componentes/publicidad/Ads'


function App() {

  const { landing } = useSelector(state => state);

  // <audio src={video}></audio>
  // Ads(() => <video src={video}> </video>, 100)

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
        <Route path="/playlist" component={PlayList} />
      </BrowserRouter>
    </>
  );
}
export default App;
