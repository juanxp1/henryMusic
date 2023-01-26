import Landing from "./Componentes/Landing";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (

    <>
      <BrowserRouter>
        <Route  path="/" component={Landing} />
      </BrowserRouter>
    </>

  );
}

export default App;
