import React from 'react'
import {Redirect, Route} from "react-router-dom"


//const user = null;
const user = {id:1, username: "ericksespinoza1"}


export default function PrivateRoute({component: Component, ...rest}) {
  return (

      <Route {...rest}>{
user ? <Component /> : <Redirect to="/" />
        }
        </Route>
   
  )
}
