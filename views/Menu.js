import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

console.log(FirebaseContext);

export default function Menu() {

    // // Context de Firebase
    const obtenerProductos = useContext(FirebaseContext);

    console.log(obtenerProductos);

    useEffect(() => {
        obtenerProductos();
    }, [])

    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}
