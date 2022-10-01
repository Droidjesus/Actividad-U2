import {useState} from "react";
export const useForm  = /*<T extends object>*/(/*formulario: T*/) => {
    
    const [formulario/*state*/, setformulario/*setState*/] = useState({
        //{
        email: 'test@test.com',
        password: '123456'
        //}
        //formulario
    
    })
    
    const onChange = (value:string, campo:string) => {
        //const onChange = (value:String, campo: keyof T) =>{
            /*setState({
                ...state,
                [campo]: value
            });*/
            setformulario({
                ...formulario,
                [campo]: value
            });
        
    }
    
    return {
        //...state,
        formulario,//: state,
        onChange
    }
}