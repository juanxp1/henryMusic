import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import Payment from './Componentes/Payment.jsx'


function App() {
  return (

    <>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/" component={Payment}/> */}
        <Route path="/home" component={Home} />

      </BrowserRouter>
    </>

  );
}

export default App;
