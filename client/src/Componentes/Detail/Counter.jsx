import Boton from "./Contador"
import Contador from "./BotonContador"
import {useState} from "react"
import styled from 'styled-components';

function CountClick() {

    const [numClics, setNumClics] = useState(0);
    // el primero importar, luego el estado del valor y luego el nombre del el estado
    
    
    const manejarClic = () => {
      setNumClics(numClics + 1 );
    };
    
    const reiniciarContador = () => {
     setNumClics(0);
    };
    
      return (
        <cssCount>
        <div className="CountClick">
          
          <div className='contenedor-principal'>
            <Contador numClics ={ numClics } />
    
            <Boton
            texto="Click"
            esBotonDeClic={true}
            manejarClic={manejarClic} />
           
            <Boton
            texto ="Reiniciar"
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />
          </div>
      </div>
      </cssCount>


      ); 
    }
    
    export default CountClick;


const cssCount = styled.div`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
html,
body{
  background-color: #1b1b32;
}
.App{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  font-family: sans-serif;

}
.freecodecamp-logo-contenedor{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
.freecodecamp-logo{
  height: 50px;
}
.contenedor-principal{
 height: 550px;
 min-width: 600px;
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}



`
