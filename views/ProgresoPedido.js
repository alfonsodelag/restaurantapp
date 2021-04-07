import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Text, H1, H3, Button } from "native-base"
import globalStyles from "../styles/global"
import { useNavigation } from "@react-navigation/native"
import PedidoContext from "../context/pedidos/pedidosContext"


export default function ProgresoPedido() {

    const { idpedido } = useContext(PedidoContext);

    return (
        <Text>{idpedidpo}</Text>
    )
}
