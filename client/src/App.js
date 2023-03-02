import Landing from "./Componentes/Landing";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Detail from './Componentes/Detail/Detail'
import { useDispatch, useSelector } from 'react-redux'
import Homedos from './Componentes/Homedos/Homedos'
import PlayList from "./Componentes/CreatePlayList/PlayList";
import { getToken } from "./Actions/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Player1 from "./Componentes/Audio-Player/Player1";
import Error from "./Componentes/Error/Error"
import Dashboard from "./Componentes/Dashboard/Dashboard";
import PrivateRoute from "./Componentes/Dashboard/PrivateRoute";
import Update from "./Componentes/Update/Update";





function App() {


  const infoPlayer = useSelector(state => state.player)
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://henrymusic.tech/',
          scope: 'read:posts',
        },
      });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch(getToken(token));
    })()

  }, [])

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Homedos} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/playlist" component={PlayList} />
        <Route path="/update" component={Update} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="*" component={Error}/> 
       </Switch>
      </BrowserRouter>
      {infoPlayer.playing ? <div className="fixed-bottom"> <Player1 tracks={infoPlayer.tracks.tracks} i={infoPlayer.tracks.i} /> </div> : null}
    </>
  )
}
export default App;


