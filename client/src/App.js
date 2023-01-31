import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";


function App() {
  return (

    <>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />

      </BrowserRouter>
    </>

  );
}

export default App;
