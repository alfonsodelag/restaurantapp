import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import globalStyles from "../../styles/global"
import { useNavigation } from "@react-navigation/native"
import PedidoContext from '../../context/pedidos/pedidosContext';


export default function BotonResumen() {

    const navigation = useNavigation();

    // Leer el objeto de Pedido
    const { pedido } = useContext(PedidoContext);

    if (pedido.length === 0) return null;

    return (
        <Button
            onPress={() => navigation.navigate("ResumenPedido")}
            style={globalStyles.boton}
        >
            <Text style={globalStyles.botonTexto}>Ir a Pedido</Text>
        </Button>
    )
}
