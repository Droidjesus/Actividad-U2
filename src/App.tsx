import { randomFillSync } from 'crypto';
import React from 'react'
import { resolveModuleNameFromCache } from 'typescript';
//import { TiposBasicos } from './typescript/TiposBasicos';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import {Contador} from './components/Contador';
//import {ContadorHook} from './components/ContadorHook';
//import { Login } from './components/Login';
//import {Usuarios} from './components/Usuarios';
import { Formularios } from './components/Formularios';
const App = () => {
  return (
    <div>
      <h1>Introduccion a Type Script with React</h1>
      <hr/>
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales></ObjetosLiterales>*/}
      {/*<Contador/>*/}
      {/*<ContadorHook/>*/}
      {/*<Login/>*/}
      {/*<Usuarios/>*/}
      {<Formularios/>}
    </div>
  )
}
export default App;

