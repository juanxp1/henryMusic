import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import New from "./Componentes/NewSong/New";
import Detail from './Componentes/Detail/Detail'
import { useDispatch, useSelector } from 'react-redux'
import Homedos from './Componentes/Homedos/Homedos'
import PlayList from "./Componentes/CreatePlayList/PlayList";
import video from './Fotos/publi.mp4';
//audio
//Publicidad
import Ads from './Componentes/publicidad/Ads'
import { getToken } from "./Actions/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


function App() {

  const { landing } = useSelector(state => state);
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  // <audio src={video}></audio>
  // Ads(() => <video src={video}> </video>, 100)
  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch(getToken(token));
    })()
  }, [])

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
