import React, { useReducer } from 'react';

//import firebase from "../../firebase";
import firebase from 'firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from "./firebaseContext";

import { OBTENER_PRODUCTOS } from "../../types";

const FirebaseState = props => {

    // Create state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch para ejecutar las funciones
    // ! El dispatch sirve para llamar funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerProductos = () => {
        dispatch({
            type: OBTENER_PRODUCTOS,
        });

        // Consultar FireBase
        firebase.db
            .collection('productos')
            .where("existencia", "==", true) // Traer sólo los que estén en existencia 
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            console.log("platillos", platillos);
        }
    }

    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;

