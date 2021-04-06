import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';

console.log(FirebaseContext);

export default function Menu() {

    // // Context de Firebase
    const { obtenerProductos } = useContext(FirebaseContext);

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}
