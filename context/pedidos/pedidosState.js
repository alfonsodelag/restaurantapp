import React, { useReducer } from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from "./pedidosContext";

const FirebaseState = props => {

    // Create state inicial
    const initialState = {
        pedido: []
    }

    // useReducer con dispatch para ejecutar las funciones
    // ! El dispatch sirve para llamar funciones
    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    return (
        <PedidoContext.Provider
            value={{
                menu: state.menu
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default FirebaseState;

