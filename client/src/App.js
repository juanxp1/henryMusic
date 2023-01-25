import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (

    <>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </>

  );
}

export default App;
