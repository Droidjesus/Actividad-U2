import React from 'react';
export const ObjetosLiterales = () => {

//Las interfaces sirven para crear instancias de objetos
//se usan para validar
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
    /*direccion:{
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }*/
}

interface Direccion{
    pais: string,
    estado: string,
    ciudad: string,
    calle: string,
    numero: number
}

//const frank = new Persona(); //error

const persona: Persona = {
    nombreCompleto: 'Martha',
    edad: 30,
    direccion: {
        pais: 'Mexico',
        estado: 'Nayarit',
        ciudad: 'Tepic',
        calle: 'Conocido',
        numero: 533
    }
}

  return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </div>
  )
}