import styled from 'styled-components';
//estilo del nave

export const NavbarContainer1 = styled.div`
 width: 100%;
 height: 10px;
 position: sticky;
 top:0;
 z-index: 99;
 background-color: black;
`

//estilo para modificar cuando sea responsive dentro del nave
export const Navbarwrapper1 = styled.div`
 margin: auto;
 width: 100%;
 max-width: 1300px;
 height: 100%;
 align-items: center;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 border: 1px solid black;
`

//estilo del logo 
export const Icon1 = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: flex-start;
 align-items: center;
 font-size: 1.2rem;
 color: #fff;
 padding-left: 0.5rem;
`

//estilos para la lista 
export const Menu1 = styled.ul`
 height: auto;
 display: flex;
 justify-content: center;
 align-items: center;
 padding-right: 60px ;

 @media screen and (max-width: 960px){
 width:auto;
 min-width: 400px;
 min-height: 100vh;
 height: auto;
 position: absolute;
 top:  auto;
 border: none;
 left: ${({ click }) => (click ? 0 : "-190%")};
 flex-direction: column;
 transition: 0.3s all ease-in;
 background-color: #000000;

}

`
//estilos para los links
export const MenuItem1 = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: start;
align-items: center;
font-size: 1.2rem;
font-weight: 400;

&:hover {
    background-color: #0a0000;
    border-bottom: 0.3rem solid #afa9a9;
    transition: 0.4s ease-in;
}

@media screen and (max-width: 960px){
 width: 100%;
 height: 70px;
}

`
export const MenuItemLink1 = styled.a`
text-decoration: none;
color: #ffff01;

`

//hacer que el icono de hamburguesa aparezca menor a 960px
export const IconLogoMobile1 = styled.div`
display: none;

@media screen and (max-width: 960px){

  padding: 30px;
  padding-left: 30px;
  height: 30px;
  display: flex;
  color: #ffff01;
  font-size: 2rem;
  padding-right: 1rem;

}


`

